import styled from 'styled-components';

export const StoryContent = styled.div`
    background-color: navy;

    grid-column: full-start / col-end 4;
    grid-row: 3 / 4;
`;

export const StoryImage = styled.div`
    background-color: white;

    grid-column: col-start 5 / full-end;
    grid-row: 3 / 4;
`;