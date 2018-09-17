// @flow
import { connect } from 'react-redux';
import { resetUserData } from '../../../reducers/auth/actions';
import Header from './Header';

const mapStateToProps = state => ({
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    resetUserData: () => {
        dispatch(resetUserData());
    },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
