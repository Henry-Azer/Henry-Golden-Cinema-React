import {
    MOVIES_LIST,
    MOVIES_LOADING,
    MOVIE_DETAILS,
    MOVIE_LOADING,
    CLEAR_MOVIE_DETAILS,
} from "../actions/types";

export default function movies_reducer(state = {}, action) {
    switch (action.type) {
        case MOVIES_LOADING:
            return { ...state, moviesLoading: true };
        case MOVIES_LIST:
            return { ...state, movies: action.payload, moviesLoading: false };
        case MOVIE_LOADING:
            return { ...state, movieLoading: true };
        case MOVIE_DETAILS:
            return { ...state, movieData: action.payload, movieLoading: false };
        case CLEAR_MOVIE_DETAILS:
            return { ...state, movieData: action.payload };
        default:
            return state;
    }
}
