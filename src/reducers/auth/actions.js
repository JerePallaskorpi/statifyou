// @flow
import * as types from '../../constants/actionTypes';

/**
 * Sets spotify access token into redux state.
 *
 * @param {string} accessToken Authorization token for spotify api.
 *
 * @returns {Object} Contains type to be used in reducer.
 */
export const setAccessToken = (accessToken: string) => ({
    type: types.SET_ACCESS_TOKEN,
    accessToken,
});

/**
 * Sets current user's data into redux state.
 *
 * @params {Object} user Contains current user's info.
 * @params {string} user.email User's email address.
 * @params {string} user.id User's spotify username.
 *
 * @returns {Object} Contains type and user data to be used in reducer.
 */
export const setUserData = (user: Object) => ({
    type: types.SET_USER_DATA,
    email: user.email,
    id: user.id,
});

/**
 * Resets current user's data from redux state.
 *
 * @returns {Object} Contains type to be used in reducer.
 */
export const resetUserData = () => ({
    type: types.RESET_USER_DATA,
});
