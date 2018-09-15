import { getHeaders } from '../config';

export const getTopArtists = accessToken => fetch('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50&offset=0', {
    headers: {
        ...getHeaders(),
        Authorization: `Bearer ${accessToken}`,
    },
})
    .then(r => r.json())
    .catch(err => console.log(err));
