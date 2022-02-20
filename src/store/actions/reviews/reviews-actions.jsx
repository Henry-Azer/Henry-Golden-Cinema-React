import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    REVIEW_SUBMITTED,
    SUBMISSION_ERROR,
    SUBMISSION_LOADING,
} from "../types";

const URL = "http://localhost:8080/api/review";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const submitRate = (rate) => (dispatch) => {
    dispatch({ type: SUBMISSION_LOADING });
    api.post(`${URL}/rate`, rate, {
        delay: 2000,
    })
        .then((response) =>
            dispatch({
                type: REVIEW_SUBMITTED,
                payload: response.data,
            })
        )
        .catch((error) => {
            console.log(error);
            dispatch({
                type: SUBMISSION_ERROR,
                payload: error.data,
            });
        });
};

export const submitMessage = (message) => (dispatch) => {
    dispatch({ type: SUBMISSION_LOADING });
    console.log(message);
    api.post(`${URL}/message`, message, {
        delay: 2000,
    })
        .then((response) =>
            dispatch({
                type: REVIEW_SUBMITTED,
                payload: response.data,
            })
        )
        .catch((error) => {
            console.log(error);
            dispatch({
                type: SUBMISSION_ERROR,
                payload: error.data,
            });
        });
};
