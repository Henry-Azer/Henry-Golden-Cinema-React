import {
    MOVIE_DETAILS_REQUEST,
    MOVIE_DETAILS_SUCCEEDED,
    MOVIE_DETAILS_ERROR,
    NOW_PLAYING_MOVIES_REQUEST,
    NOW_PLAYING_MOVIES_SUCCEEDED,
    NOW_PLAYING_MOVIES_LIST_ERROR,
    MOVIES_LIST_REQUEST,
    MOVIES_LIST_SUCCEEDED,
    MOVIES_LIST_ERROR,
    CLEAR_MOVIE_DETAILS,
} from "../actions/types";

export default function movies_reducer(state = {}, action) {
    switch (action.type) {
        // MOVIES LIST
        case MOVIES_LIST_REQUEST:
            return { ...state, moviesRequest: true };
        case MOVIES_LIST_SUCCEEDED:
            return {
                ...state,
                moviesList: action.payload,
                moviesRequest: false,
            };
        case MOVIES_LIST_ERROR:
            return {
                ...state,
                moviesError: action.payload,
                moviesRequest: false,
            };

        // NOW PLAYING MOVIES LIST
        case NOW_PLAYING_MOVIES_REQUEST:
            return { ...state, nowPlayingMoviesRequest: true };
        case NOW_PLAYING_MOVIES_SUCCEEDED:
            return {
                ...state,
                nowPlayingMoviesList: action.payload,
                nowPlayingMoviesRequest: false,
            };
        case NOW_PLAYING_MOVIES_LIST_ERROR:
            return {
                ...state,
                nowPlayingMoviesError: action.payload,
                nowPlayingMoviesRequest: false,
            };

        // MOVIE DETAILS
        case MOVIE_DETAILS_REQUEST:
            return { ...state, movieRequest: true };
        case MOVIE_DETAILS_SUCCEEDED:
            return {
                ...state,
                movieDetails: action.payload,
                movieRequest: false,
            };
        case MOVIE_DETAILS_ERROR:
            return {
                ...state,
                movieError: action.payload,
                movieRequest: false,
            };
        case CLEAR_MOVIE_DETAILS:
            return { ...state, movieDetails: action.payload };
        default:
            return state;
    }
}
