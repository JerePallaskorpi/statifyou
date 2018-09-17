// @flow
import React from 'react';
import Header from '../../ui/blocks/Header';

type Props = {
    user: {
        id: string,
        email: string,
    },
    handleLogoutClick: () => void,
};

const HeaderView = ({ user, handleLogoutClick}: Props) => (
    <Header>
        <Header.Logo>
            <span>Statifyou</span>
        </Header.Logo>
        <Header.User>
            <div>
                <span>{user.id}</span>
            </div>
            <Header.User.Logout onClick={handleLogoutClick}>
                {user.id && <i className="fas fa-sign-out-alt" />}
            </Header.User.Logout>
        </Header.User>
    </Header>
);

export default HeaderView;
