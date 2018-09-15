// @flow
import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import { getUserData } from '../../../api/auth/getUserData';
import Login from '../login/Login';

type Props = {
    accessToken: string,
    setAccessToken: (accessToken: string) => void,
    setUserData: (accessToken: string) => void,
    user: Object,
};

class Home extends Component<Props, null> {
    componentDidMount() {
        const { setAccessToken, setUserData } = this.props;

        const params = queryString.parse(window.location.search);
        const accessToken = params.access_token;
        if (accessToken) {
            setAccessToken(accessToken);
            getUserData(accessToken)
                .then(r => setUserData(r));
        }
    }

    render() {
        const { accessToken, user } = this.props;

        if (!accessToken) {
            return <Login />;
        }

        return (
            <Fragment>
                <p>You are logged in as {user.id} ({user.email})</p>
            </Fragment>
        );
    }
}

export default Home;
