import React from 'react';
import { Header } from '../../ui/blocks/Header';

const HeaderContainer = ({ user, setAccessToken }) => (
    <Header>
        <div>
            <span>Statifyou</span>
        </div>
        <div>
            <span>{user.id ? user.id : ''}</span>
        </div>
        <div onClick={() => { setAccessToken(null); window.location = '/'; }}>
            <span>{user.email && 'Logout'}</span>
        </div>
    </Header>
);

export default HeaderContainer;
