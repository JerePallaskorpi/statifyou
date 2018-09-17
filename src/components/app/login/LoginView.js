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
            <Button onClick={handleLoginClick}>Login</Button>
        </LoginWrapper>
    </Fragment>
);

export default LoginView;
