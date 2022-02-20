import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCEEDED,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_SUCCEEDED,
} from "../actions/types";

export default function auth_reducer(state = {}, action) {
    switch (action.type) {
        // LOGIN
        case LOGIN_REQUEST:
            return { ...state, loginRequest: true };
        case LOGIN_SUCCEEDED:
            return {
                ...state,
                authenticatedUser: action.payload,
                isUserAuthenticated: true,
                loginRequest: false,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loginError: action.payload,
                isUserAuthenticated: false,
                loginRequest: false,
            };

        // LOGOUT
        case LOGOUT_REQUEST:
            return { ...state, logoutRequest: true };
        case LOGOUT_SUCCEEDED:
            return {
                ...state,
                authenticatedUser: null,
                isUserAuthenticated: false,
                logoutRequest: false,
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                logoutError: action.payload,
                isUserAuthenticated: true,
                logoutRequest: false,
            };
        default:
            return state;
    }
}
