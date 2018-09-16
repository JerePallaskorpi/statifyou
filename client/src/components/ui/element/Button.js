import styled, { css } from 'styled-components';
import * as styles from '../defaultStyles';

export const Button = styled.button`
    text-transform: uppercase;
    font-weight: 700;
    border: 0;
    padding: 1rem;
    transition: 0.3s;
    margin: 1em 0;
    color: ${styles.colorLight};
    background: ${styles.colorMain};
    border-radius: 30px;
    letter-spacing: 2px;
    
    ${props => props.flat && css`
         color: ${styles.colorMain};
         background: none;
    `}
    
    ${props => props.disabled && css`
         opacity: 0.5;
    `}
    
    &:hover {
        cursor: pointer;
        background: ${styles.colorMainHighlight};
        
        ${props => props.disabled && css`
            opacity: 0.5;
            background: ${styles.colorMain};
            cursor: not-allowed;
        `}
        
        ${props => props.flat && css`
            text-decoration: underline;
            background: none;
        `}
        
        ${props => props.flat && props.disabled && css`
            background: none;
        `}
        
    }
    
    &:focus {
        outline: none;
    }  
`;
