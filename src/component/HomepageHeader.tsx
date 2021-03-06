/** @jsx jsx */

import React, { useEffect, useState } from 'react';
import { css, jsx } from '@emotion/react';
import Navigation from './Navigation';
import { fonts, themeColors, marginStyle } from '../utils/theme';

const headerStyle = css`
  background-color: ${themeColors.indigo};
  height: 67.5rem;
  position: relative;
`;

const headerWrapperStyle = css`
  display: flex;
  flex-direction: column;
  height: 67.5rem;
  position: relative;
  z-index: 10;
  ${marginStyle}
`;

const titleStyle = css`
  color: ${themeColors.white};
  font-family: ${fonts.calibre};
  font-size: 10rem;
  font-weight: 400;
  line-height: 14rem;
  margin: 0;
  margin: 8rem 0 1rem 0;
`;

const highlightStyle = css`
  background: ${themeColors.sky};
  color: ${themeColors.indigo};
  padding: 2rem 2rem 0;
`;

const subtitleStyle = css`
  color: ${themeColors.white};
  font-family: ${fonts.swiftNeueLtPro};
  font-size: 3.6rem;
  font-weight: normal;
  line-height: 5rem;
  width: 65rem;
`;

const HomepageHeader: React.FC = () => {
  const [pageWidth, updatePageWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  useEffect(() => {
    const handleResize = () => updatePageWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header css={headerStyle}>
      <svg css={css`position: absolute;`} height="67.5rem" width={pageWidth-15}>
        <line x1={pageWidth} y1="0" x2={pageWidth / 2} y2="675" stroke={themeColors.gossamer} strokeOpacity=".25" />
        <line x1={pageWidth} y1="100" x2={(pageWidth / 2) + 100} y2="675" stroke={themeColors.gossamer} strokeOpacity=".25" />
      </svg>
      <div css={headerWrapperStyle}>
        <Navigation />
        <h1 css={titleStyle}>
          <span css={highlightStyle}>
            Rethink
          </span>
          {' '}
          <span>
            the Suburban Strip
          </span>
        </h1>
        <p css={subtitleStyle}>First best place to start transforming old uses the meet the needs of residents</p>
      </div>
    </header>
  )
};

export default HomepageHeader;
