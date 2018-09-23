import { getHeaders } from '../config';

/**
 * Get user's spotify data.
 *
 * @param {string} accessToken Authorization token for spotify api.
 *
 * @returns {Object} User's spotify data.
 */
export const getUserData = accessToken => fetch('https://api.spotify.com/v1/me', {
    headers: {
        ...getHeaders(),
        Authorization: `Bearer ${accessToken}`,
    },
})
    .then(r => r.json())
    .catch(err => console.log(err));
