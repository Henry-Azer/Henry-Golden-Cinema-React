import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../types";

const URL = "http://localhost:8080/api/auth";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const authenticateUser = (values) => (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
        payload: null,
    });

    console.log(values);

    axios
        .post(`${URL}/process-login`, {
            username: values.email,
            password: values.password,
        })
        .then(function(response) {
            console.log(response);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data,
            });
        })
        .catch(function(error) {
            console.log(error);
            dispatch({
                type: LOGIN_FAILURE,
                payload: error,
            });
        });
};

export const unauthenticatedUser = () => (dispatch) => {
    api.post(`${URL}/process-logout`, {
        delay: 0,
    })
        .then((response) => {
            dispatch({
                type: LOGOUT,
                payload: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
