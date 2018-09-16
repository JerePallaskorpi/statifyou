import querystring from 'querystring';
import { getHeaders } from '../config';

/**
 * Get user's top artists and tracks
 *
 * @param {string} accessToken Authorization token
 * @param {string} timeRange Time range for query (short_term, medium_term or long_term)
 * @param {string} type Request type (artists or tracks)
 *
 * @returns {object} Data of users top artists or tracks
 */
export const getUserTopList = (accessToken, timeRange, type) => fetch(`https://api.spotify.com/v1/me/top/${type}?${
    querystring.stringify({
        time_range: timeRange,
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
