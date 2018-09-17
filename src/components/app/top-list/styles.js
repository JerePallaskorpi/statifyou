import styled from 'styled-components';

export const TopListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 768px) {
        flex-wrap: nowrap;
        overflow-x: scroll;
        position: absolute;
    }
`;

export const TopListOverflow = styled.div`    
    @media only screen and (max-width: 768px) {
        height: 350px;
        overflow: hidden;
        width: 100%;
        position: absolute;
    }
`;
