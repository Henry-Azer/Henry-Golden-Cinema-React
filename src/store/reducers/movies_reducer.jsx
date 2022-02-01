import { MOVIES_LIST, CLEAR_USER_LIST } from "../types";

export default function movies_reducer(state = {}, action) {
    switch (action.type) {
        case MOVIES_LIST:
            return { ...state, movies: action.payload };
        case CLEAR_USER_LIST:
            return { ...state, movies: action.payload };
        default:
            return state;
    }
}
