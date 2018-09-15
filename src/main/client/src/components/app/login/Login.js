// @flow
import React, { Component } from 'react';
import { getSpotifyAuth } from '../../../api/auth/getSpotifyAuth';

type Props = {
    /* ... */
};

type State = {
    /* ... */
};

const initialState = {
    /* ... */
};

class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = { ...initialState };

        this.loginButton = this.loginButton.bind(this);
    }

    loginButton = () => {
        getSpotifyAuth();
    };

    render() {
        return <button onClick={this.loginButton}>Login</button>;
    }
}

export default Login;
