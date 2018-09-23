import querystring from 'querystring';
import { getHeaders } from '../config';

/**
 * Get newest spotify releases.
 *
 * @param {string} accessToken Authorization token for spotify api.
 *
 * @returns {Object} Data of new releases.
 */
export const getNewReleases = accessToken => fetch(`https://api.spotify.com/v1/browse/new-releases?${
    querystring.stringify({
        country: 'US',
        limit: 50,
        offset: 0,
    })
}`, {
    headers: {
        ...getHeaders(),
        Authorization: `Bearer ${accessToken}`,
    },
})
    .then(r => r.json())
    .catch(err => console.log(err));
