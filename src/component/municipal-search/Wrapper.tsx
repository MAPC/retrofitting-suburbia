/** @jsx jsx */

import React, { useState, useRef, useReducer } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { jsx, css } from '@emotion/react';
import { themeColors } from '../../utils/theme';
import MunicipalData from './MunicipalData';
import SearchMap from './SearchMap';

const wrapperStyle = css`
  background: ${themeColors.gossamer};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3.5rem 5rem;
  margin: 4.5rem 0 5rem 0;
`;

type MunicipalSearch = {
  highlightedSites: Array<number|undefined>,
}

const initialState: MunicipalSearch = {
  highlightedSites: []
}

function reducer(state: MunicipalSearch, action: any) {
  switch(action.type) {
    case 'addSite':
      if (state.highlightedSites.find(site => site === action.toggledSite)) {
        return {...state, highlightedSites: state.highlightedSites.filter(item => item !== action.toggledSite)}
      }
      return {...state, highlightedSites: [...state.highlightedSites, action.toggledSite]};
    default:
      return {...state};
  }
}

const Wrapper: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedMuni, setMuni] = useState<string|undefined>();
  const containerRef = useRef<HTMLInputElement>(null);
  return (
    <StaticQuery
      query={graphql`
        query TabularSiteData {
          allSitesQuintilesCsv(filter: {top_quintile: {eq: "TRUE"}}) {
            nodes {
              site_oid
              municipal
              Growth_Potential_Score
              Healthy_Communtiies_Score
              Healthy_Watersheds_Score
              Travel_Choices_Score
              Overall_Score
            }
          }
        }
      `}
      render={(data) => (
        <div css={wrapperStyle}>
          <MunicipalData
            data={data.allSitesQuintilesCsv.nodes}
            selectedMuni={selectedMuni}
            containerRef={containerRef}
            dispatch={dispatch}
          />
          <SearchMap
            selectedMuni={selectedMuni}
            setMuni={setMuni}
            containerRef={containerRef}
            highlightedSites={state.highlightedSites}
          />
        </div>
      )}
    />
  );
};

export default Wrapper;
