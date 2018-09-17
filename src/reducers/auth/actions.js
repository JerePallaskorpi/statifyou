// @flow
import * as types from '../../constants/actionTypes';

export const setAccessToken = (accessToken: string) => ({
    type: types.SET_ACCESS_TOKEN,
    accessToken,
});

export const setUserData = (user: Object) => ({
    type: types.SET_USER_DATA,
    email: user.email,
    id: user.id,
});

export const resetUserData = () => ({
    type: types.RESET_USER_DATA,
});
