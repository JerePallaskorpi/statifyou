// @flow
import React, { Component, Fragment } from 'react';
import { getUserData } from '../../../api/auth/getUserData';
import HeaderContainer from '../header/HeaderContainer';
import Login from '../login/Login';
import TopListContainer from '../top-list/TopListContainer';

type Props = {
    accessToken: string,
    setAccessToken: (accessToken: string) => void,
    setUserData: (accessToken: string) => void,
    user: Object,
};

class Home extends Component<Props, null> {
    componentDidMount() {
        const { setAccessToken, setUserData } = this.props;
        const params = (new URL(document.location)).searchParams;
        const accessToken = params.get('access_token');
        if (accessToken) {
            setAccessToken(accessToken);
            getUserData(accessToken)
                .then(r => setUserData(r));
        }
    }

    render() {
        const { accessToken, user, setAccessToken } = this.props;

        if (!accessToken) {
            return (
                <Fragment>
                    <HeaderContainer user={user} setAccessToken={setAccessToken} />
                    <Login />
                </Fragment>
            );
        }

        return (
            <Fragment>
                <HeaderContainer user={user} setAccessToken={setAccessToken} />
                <div style={{ maxWidth: '700px', margin: 'auto' }}>
                    <TopListContainer />
                </div>
            </Fragment>
        );
    }
}

export default Home;
