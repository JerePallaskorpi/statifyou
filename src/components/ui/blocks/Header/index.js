import styled from 'styled-components';
import * as styles from '../../defaultStyles';

const Header = styled.div`
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

const Logo = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const User = styled.div`
    display: flex;
`;

const Logout = styled.div`
    padding-left: 1em;
    
    &:hover {
        cursor: pointer;
        color: ${styles.colorMainHighlight};
    }
`;

Header.Logo = Logo;
Header.User = User;
Header.User.Logout = Logout;

export default Header;
