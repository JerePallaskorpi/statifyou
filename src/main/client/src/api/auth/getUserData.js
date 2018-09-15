import { getHeaders } from '../config';

export const getUserData = accessToken => fetch('https://api.spotify.com/v1/me', {
    headers: {
        ...getHeaders(),
        Authorization: `Bearer ${accessToken}`,
    },
})
    .then(r => r.json())
    .catch(err => console.log(err));
