// @flow
import { SET_ACCESS_TOKEN } from '../../constants/actionTypes';

const initialState = null;

type State = string;

type Action = {
    type: string,
    accessToken: string,
};

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return action.accessToken;
        default:
            return state;
    }
};
