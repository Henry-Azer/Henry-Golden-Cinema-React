import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    MOVIES_LIST,
    MOVIES_LOADING,
    MOVIE_DETAILS,
    MOVIE_LOADING,
    CLEAR_MOVIE_DETAILS,
} from "../types";

const URL = "http://localhost:8080/api/movie";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const moviesList = () => (dispatch) => {
    dispatch({ type: MOVIES_LOADING });
    api.get(`${URL}/all`, {
        delay: 0,
    })
        .then((response) =>
            dispatch({
                type: MOVIES_LIST,
                payload: response.data,
            })
        )
        .catch((error) => {
            console.log(error);
        });
};

export const movieDetails = (id) => (dispatch) => {
    dispatch({ type: MOVIE_LOADING });

    api.get(`${URL}/id/${id}`, {
        delay: 0,
    })
        .then((response) =>
            dispatch({
                type: MOVIE_DETAILS,
                payload: response.data,
            })
        )
        .catch((error) => {
            console.log(error);
        });
};

export function clearMovieDetails() {
    return {
        type: CLEAR_MOVIE_DETAILS,
        payload: null,
    };
}
