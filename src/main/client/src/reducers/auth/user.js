// @flow
import { SET_USER_DATA } from '../../constants/actionTypes';

const initialState = {
    email: null,
    id: null,
};

type State = {
    email: string,
    id: string,
};

type Action = {
    email: string,
    id: string,
};

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                email: action.email,
                id: action.id,
            };
        default:
            return state;
    }
};
