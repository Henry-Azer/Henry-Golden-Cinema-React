import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    USERS_LIST_REQUEST,
    USERS_LIST_SUCCEEDED,
    USERS_LIST_ERROR,
    USER_EXISTS_REQUEST,
    USER_EXISTS_SUCCEEDED,
    USER_EXISTS_ERROR,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCEEDED,
    REGISTRATION_ERROR,
    CLEAR_REGISTRATION_DETAILS,
} from "../types";

const URL = "http://localhost:8080/api/user";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const usersList = () => (dispatch) => {
    dispatch({ type: USERS_LIST_REQUEST });

    api.get(`${URL}/all`, {
        delay: 0,
    })
        .then((response) => {
            dispatch({
                type: USERS_LIST_SUCCEEDED,
                payload: response.data,
            });
        })
        .catch((error) => {
            dispatch({
                type: USERS_LIST_ERROR,
                payload: error.data,
            });
        });
};

export const userExistsCheck = (user) => (dispatch) => {
    dispatch({ type: USER_EXISTS_REQUEST });

    api.post(`${URL}/${user.email}`, {
        delay: 0,
    })
        .then((response) => {
            dispatch({
                type: USER_EXISTS_SUCCEEDED,
                payload: true,
            });
        })
        .catch((error) => {
            dispatch({
                type: USER_EXISTS_ERROR,
                payload: false,
            });
        });
};

export const userRegistration = (user) => (dispatch) => {
    dispatch({ type: REGISTRATION_REQUEST });

    api.post(`${URL}`, user, {
        delay: 2000,
    })
        .then((response) =>
            dispatch({
                type: REGISTRATION_SUCCEEDED,
                payload: response.data,
            })
        )
        .catch((error) => {
            dispatch({
                type: REGISTRATION_ERROR,
                payload: error.data,
            });
        });
};

export function clearRegistrationDetails() {
    return {
        type: CLEAR_REGISTRATION_DETAILS,
        payload: null,
    };
}
