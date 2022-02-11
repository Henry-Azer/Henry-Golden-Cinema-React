import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from "../actions/types";

export default function auth_reducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, authRequest: true };
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticatedUser: action.payload,
                userAuthenticated: true,
                authRequest: false,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                userAuthenticated: false,
                authRequest: false,
            };
        case LOGOUT:
            return {
                ...state,
                authenticatedUser: action.payload,
                userAuthenticated: false,
                authRequest: false,
            };
        default:
            return state;
    }
}
