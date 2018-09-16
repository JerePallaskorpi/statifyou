// @flow
import React, { Fragment } from 'react';
import { Button } from '../../ui/elements/Button';
import { LoginWrapper } from './styles';

type Props = {
    handleLoginClick: Function,
};

const LoginView = ({ handleLoginClick }: Props) => (
    <Fragment>
        <LoginWrapper>
            <p>Login to see your spotify plays</p>
            <Button onClick={handleLoginClick}>Login</Button>
        </LoginWrapper>
    </Fragment>
);

export default LoginView;
