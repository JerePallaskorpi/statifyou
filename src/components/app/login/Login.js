// @flow
import React, { Component } from 'react';
import LoginView from './LoginView';

class Login extends Component<null, null> {
    constructor() {
        super();

        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick = () => {
        window.location = window.location.href.includes('localhost')
            ? 'http://localhost:8888/api/login'
            : 'https://statifyou-api.herokuapp.com/api/login';
    };

    render() {
        return <LoginView handleLoginClick={this.handleLoginClick} />;
    }
}

export default Login;
