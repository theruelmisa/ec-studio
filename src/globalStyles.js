import styled, { createGlobalStyle } from 'styled-components';

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

export const MainContainer = styled.div`
    display: grid;
    grid-template-rows: 100vh min-content 40vw repeat(3, min-content);
    grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] 1fr [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] 1fr [full-end];

    & > * {
        padding: 40px;
        font-size: 3rem;
    }
`;

export default GlobalStyles;