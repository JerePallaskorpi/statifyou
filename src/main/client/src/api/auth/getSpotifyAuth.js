import { getHeaders } from '../config';

export const getSpotifyAuth = () => fetch('/api/login', getHeaders())
    .then(r => window.location.replace(r.url))
    .catch(err => console.log(err));
