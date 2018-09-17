// @flow
import React, { Component } from 'react';
import HeaderView from './HeaderView';

type Props = {
    user: {
        id: string,
        email: string,
    },
    resetUserData: () => void,
};

class Header extends Component<Props, null> {
    constructor(props: Props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick = () => {
        const { resetUserData } = this.props;

        resetUserData();
        window.history.pushState({}, document.title, '/');
    };

    render() {
        const { user } = this.props;

        return <HeaderView user={user} handleLogoutClick={this.handleLogoutClick} />;
    }
}

export default Header;
