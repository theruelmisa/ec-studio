import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 8rem;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
`;

export const Logo = styled.h1`
    cursor: pointer;
    font-size: 2.5rem;
    letter-spacing: .3rem;
`;

export const Nav = styled.nav`
    flex: 0 0 20%;
    font-size: 1.4rem;
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuItem = styled.li`
    padding: 1rem 0;

    &:hover {
        color: red;
    }
`;

export const MenuLink = styled.a`

`;