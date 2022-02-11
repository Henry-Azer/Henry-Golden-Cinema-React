import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    USERS_LIST,
    USER_EXIST,
    USER_REGISTERED,
    REGISTER_ERROR,
    REGISTER_LOADING,
    CLEAR_REGISTRATION_DETAILS,
} from "../types";

const URL = "http://localhost:8080/api/user";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const usersList = () => (dispatch) => {
    api.get(`${URL}/all`, {
        delay: 0,
    })
        .then((response) => {
            dispatch({
                type: USERS_LIST,
                payload: response.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const userRegistration = (user) => (dispatch) => {
    dispatch({ type: REGISTER_LOADING });
    api.post(`${URL}`, user, {
        delay: 2000,
    })
        .then((response) =>
            dispatch({
                type: USER_REGISTERED,
                payload: response.data,
            })
        )
        .catch((error) => {
            console.log(error);
            dispatch({
                type: REGISTER_ERROR,
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

export const userExistCheck = (user) => (dispatch) => {
    console.log(user.email);
    api.post(`${URL}/${user.email}`, {
        delay: 0,
    })
        .then((response) => {
            console.log(response);
            dispatch({
                type: USER_EXIST,
                payload: true,
            });
        })
        .catch((error) => {
            console.log(error);
            dispatch({
                type: USER_EXIST,
                payload: false,
            });
        });
};
