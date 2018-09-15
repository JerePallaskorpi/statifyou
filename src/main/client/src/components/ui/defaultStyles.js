import { injectGlobal } from 'styled-components';

// Colors
export const colorMain = '#1DB954';
export const colorDark = '#191414';
export const colorLight = '#FFFFFF';

export const colorMainHighlight = '#1da552';

// Global Styles
injectGlobal`
  body {
    margin: 0 auto;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background: ${colorDark};
    color: ${colorLight};
    max-width: 700px;

    input, select, textarea, button {
        font-family: inherit;
    }

    *::-moz-selection { background: ${colorMain}; }
    *::selection { background: ${colorMain}; }
  }
`;
