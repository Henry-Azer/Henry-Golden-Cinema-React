import axios from "axios";
import { MOVIES_LIST, MOVIE_DETAILS, CLEAR_MOVIE_DETAILS } from "../types";

const URL = "http://localhost:8080";

export function moviesList() {
    const request = axios
        .get(`${URL}/api/movie/all`)
        .then((response) => response.data);

    return {
        type: MOVIES_LIST,
        payload: request,
    };
}

export function movieDetails(id) {
    const request = axios
        .get(`${URL}/api/movie/id/${id}`)
        .then((response) => response.data);

    return {
        type: MOVIE_DETAILS,
        payload: request,
    };
}

export function clearMovieDetails() {
    return {
        type: CLEAR_MOVIE_DETAILS,
        payload: null,
    };
}
