import {
    SHOWS_LIST_REQUEST,
    SHOWS_LIST_SUCCEEDED,
    SHOWS_LIST_ERROR,
    CLEAR_SHOWS_LIST,
} from "../actions/types";

export default function shows_reducer(state = {}, action) {
    switch (action.type) {
        // Shows LIST
        case SHOWS_LIST_REQUEST:
            return { ...state, showsListRequest: true };
        case SHOWS_LIST_SUCCEEDED:
            return {
                ...state,
                showsList: action.payload,
                showsListRequest: false,
            };
        case SHOWS_LIST_ERROR:
            return {
                ...state,
                showsListError: action.payload,
                showsListRequest: false,
            };
        case CLEAR_SHOWS_LIST:
            return { ...state, showsList: action.payload };
        default:
            return state;
    }
}
