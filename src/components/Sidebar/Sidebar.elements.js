import styled from 'styled-components';

export const SidebarContainer = styled.div`
    background: inherit;

    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;

    z-index: 10;
`;