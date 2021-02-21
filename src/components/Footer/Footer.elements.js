import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background: palevioletred;

    grid-column: full-start / full-end;
    grid-row: 6 / 7;

    padding: 8rem;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(2, min-content);
    grid-gap: 2rem;
`;

export const SiteNav = styled.ul`

    grid-column: 2 / 5;
    grid-row: 1 / 2;

    font-size: 2rem;
`;

export const NavItem = styled.li`
    margin-bottom: 1rem;

    
`;

export const NavLink = styled.a`
    padding: 1rem 0;
    &:hover {
        color: white;
    }
`;

export const SocialMedia = styled.ul`
    grid-column: 8 / 10;
    grid-row: 2 / -1;
    align-self: center;
    justify-self: end;
    display: flex;
    align-items: flex-start;
    font-size: 2rem;
    margin-top: -4rem;
`;

export const SocialItem = styled.li`
    margin-right: 1rem;
    &:hover {
        color: white;
        transform: scale(1.5);
    }
`;

export const SocialLink = styled.a`
`;

export const FooterText = styled.div`
    border: 1px solid red;

    grid-column: 2 / 8;
    grid-row: 2 / -1;
    font-size: 1.5rem;
`;

export const CompanyDetails = styled.div`
    border: 1px solid red;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    & > p {
        margin-right: 3rem;
    }
`;