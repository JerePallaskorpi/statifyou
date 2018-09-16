// @flow
import { connect } from 'react-redux';
import { setAccessToken, setUserData } from '../../../reducers/auth/actions';
import TopList from './TopList';

const mapStateToProps = state => ({
    accessToken: state.auth.accessToken,
});

const mapDispatchToProps = dispatch => ({
    setAccessToken: (accessToken: string) => {
        dispatch(setAccessToken(accessToken));
    },
    setUserData: (accessToken: string) => {
        dispatch(setUserData(accessToken));
    },
});

const TopListContainer = connect(mapStateToProps, mapDispatchToProps)(TopList);

export default TopListContainer;
