/** @jsx jsx */

import React from 'react';
import {
  css, jsx, Global, SerializedStyles,
} from '@emotion/react';
import { Footer } from 'mapc-design-system';
import { themeColors, fonts } from '../utils/theme';

const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <Global styles={css`
      @import url("//hello.myfonts.net/count/37908e");

      @font-face {
        font-family: 'Swift Neue LT Pro';
        src: url('fonts/SwiftNeueLTPro.eot') format('eot');
        src: local('Swift Neue LT Pro'),
            url('fonts/SwiftNeueLTPro.eot?#iefix') format('embedded-opentype'),
            url('fonts/SwiftNeueLTPro.woff2') format('woff2'),
            url('fonts/SwiftNeueLTPro.woff') format('woff'),
            url('fonts/SwiftNeueLTPro.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('./fonts/Calibre-Regular.eot');
        src: local('Calibre'), local('Calibre-Regular'),
            url('./fonts/Calibre-Regular.eot?#iefix') format('embedded-opentype'),
            url('./fonts/Calibre-Regular.woff2') format('woff2'),
            url('./fonts/Calibre-Regular.woff') format('woff'),
            url('./fonts/Calibre-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      html {
        font-size: 10px;
        height: 100%;
      }

      body {
        color: ${themeColors.fontGray};
        font-family: ${fonts.swiftNeueLtPro};
        font-size: 1.6rem;
        height: 100%;
        line-height: 2.4rem;
        margin: 0;
      }

      #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
      }`}
    />
    {children}
    <Footer
      backgroundColor={themeColors.indigo}
      fontColor={themeColors.white}
      paddingLeft={50}
      paddingRight={50}
      maxWidth={1366}
    />
  </React.Fragment>
);

export default Layout;
