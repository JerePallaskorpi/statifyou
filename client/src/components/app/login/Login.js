// @flow
import React, { Component } from 'react';
import LoginView from './LoginView';

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
        window.location.replace('/api/login')
    };

    render() {
        return <LoginView loginButton={this.loginButton} />;
    }
}

export default Login;
