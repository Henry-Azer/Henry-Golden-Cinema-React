import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCEEDED,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_SUCCEEDED,
} from "../types";

const URL = "http://localhost:8080/api/user";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const authenticateUser = (values) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    api.post(
        `${URL}/auth`,
        {
            email: values.email,
            password: values.password,
        },
        { delay: 2000 }
    )
        .then(function(response) {
            dispatch({
                type: LOGIN_SUCCEEDED,
                payload: response.data,
            });
        })
        .catch(function(error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.data,
            });
        });
};

export const unauthenticatedUser = () => (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });

    api.post(`${URL}/process-logout`, {
        delay: 0,
    })
        .then((response) => {
            dispatch({
                type: LOGOUT_SUCCEEDED,
                payload: response.data,
            });
        })
        .catch((error) => {
            dispatch({
                type: LOGOUT_FAILURE,
                payload: error.data,
            });
        });
};
