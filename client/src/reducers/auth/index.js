import { combineReducers } from 'redux';

import user from './user';
import accessToken from './accessToken';

export default combineReducers({
    user,
    accessToken,
});
