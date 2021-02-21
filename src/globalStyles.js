import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *, 
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; // 10 px for easy rem sizing
    }

    body {
        line-height: 1.5;
        font-weight: 400;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

`;

export default GlobalStyles;