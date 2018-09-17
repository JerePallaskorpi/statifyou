import { injectGlobal } from 'styled-components';

// Colors
export const colorMain = '#1DB954';
export const colorDark = '#191414';
export const colorLight = '#FFFFFF';

export const colorMainHighlight = '#1da552';

// Shadows
export const shadowDefault = '0 2px 6px 0 hsla(0, 0%, 0%, 0.6)';
export const shadowListImage = '0px 2px 6px 1px hsla(0, 0%, 0%, 0.6);';

// Global Styles
injectGlobal`
  body {
    margin: 0 auto;
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
    font-size: 16px;
    background: ${colorDark};
    color: ${colorLight};

    input, select, textarea, button {
        font-family: inherit;
    }

    *::-moz-selection { background: ${colorMain}; }
    *::selection { background: ${colorMain}; }
  }
`;
