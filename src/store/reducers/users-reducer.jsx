import {
    USER_REGISTERED,
    REGISTER_LOADING,
    REGISTER_ERROR,
    USER_EXIST,
    USERS_LIST,
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
