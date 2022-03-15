import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import { REVIEW_REQUEST, REVIEW_SUCCEEDED, REVIEW_ERROR, CLEAR_REVIEW_DETAILS } from "../types";

const URL = "http://localhost:8080/api/review";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const submitRate = (rate) => (dispatch) => {
    dispatch({ type: REVIEW_REQUEST });

    api.post(`${URL}/rate`, rate, {
        delay: 2000,
    })
        .then((response) =>
            dispatch({
                type: REVIEW_SUCCEEDED,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch({
                type: REVIEW_ERROR,
                payload: error.data,
            });
        });
};

export const submitMessage = (message) => (dispatch) => {
    dispatch({ type: REVIEW_REQUEST });

    api.post(`${URL}/message`, message, {
        delay: 2000,
    })
        .then((response) =>
            dispatch({
                type: REVIEW_SUCCEEDED,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch({
                type: REVIEW_ERROR,
                payload: error.data,
            });
        });
};

export function clearReviewDetails() {
    return {
        type: CLEAR_REVIEW_DETAILS,
        payload: null,
    };
}
