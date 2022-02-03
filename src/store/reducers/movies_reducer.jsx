import { MOVIES_LIST, MOVIE_DETAILS, CLEAR_MOVIE_DETAILS } from "../types";

export default function movies_reducer(state = {}, action) {
    switch (action.type) {
        case MOVIES_LIST:
            return { ...state, movies: action.payload };
        case MOVIE_DETAILS:
            return { ...state, movieData: action.payload };
        case CLEAR_MOVIE_DETAILS:
            return { ...state, movieData: action.payload};
        default:
            return state;
    }
}
