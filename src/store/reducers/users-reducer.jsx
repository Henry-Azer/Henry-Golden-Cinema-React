import {
    USERS_LIST,
    USER_EXIST,
    USER_REGISTERED,
    REGISTER_ERROR,
    REGISTER_LOADING,
    CLEAR_REGISTRATION_DETAILS,
} from "../actions/types";

export default function users_reducer(state = {}, action) {
    switch (action.type) {
        case REGISTER_LOADING:
            return { ...state, registerLoading: true };
        case USER_REGISTERED:
            return {
                ...state,
                registeredUser: action.payload,
                registerLoading: false,
                userRegistered: true,
            };
        case CLEAR_REGISTRATION_DETAILS:
            return {
                ...state,
                userRegistered: false,
            };
        case REGISTER_ERROR:
            return {
                ...state,
                registerError: action.payload,
                registerLoading: false,
                userRegistered: false,
            };
        case USERS_LIST:
            return {
                ...state,
                users: action.payload,
            };
        case USER_EXIST:
            return {
                ...state,
                userExist: action.payload,
            };
        default:
            return state;
    }
}
