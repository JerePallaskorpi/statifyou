import styled from 'styled-components';

export const TopListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 768px) {
        justify-content: space-around;
    }
`;
