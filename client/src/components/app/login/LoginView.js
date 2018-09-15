// @flow
import React from 'react';
import { Button } from '../../ui/element/Button';
import { LoginWrapper } from './styles';

type Props = {
    loginButton: Function,
};

const LoginView = ({ loginButton }: Props) => (
    <LoginWrapper>
        <p>Login to see your spotify plays</p>
        <Button onClick={loginButton}>Login</Button>
    </LoginWrapper>
);

export default LoginView;
