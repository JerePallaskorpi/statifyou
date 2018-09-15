// @flow
import { connect } from 'react-redux';
import { setAccessToken, setUserData } from '../../../reducers/auth/actions';
import Home from './Home';

const mapStateToProps = state => ({
    accessToken: state.auth.accessToken,
    user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    setAccessToken: (accessToken: string) => {
        dispatch(setAccessToken(accessToken));
    },
    setUserData: (accessToken: string) => {
        dispatch(setUserData(accessToken));
    },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
