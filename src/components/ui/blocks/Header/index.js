import styled from 'styled-components';
import * as styles from '../../defaultStyles';

export const Header = styled.div`
    width: calc(100% - 2em);
    height: 50px;
    background: ${styles.colorDark};
    -webkit-box-shadow: ${styles.shadowDefault};
    -moz-box-shadow: ${styles.shadowDefault};
    box-shadow: ${styles.shadowDefault};
    display: flex;
    align-items: center;
    padding: 0 1em;
    color: ${styles.colorMain};
    justify-content: space-between;
`;
