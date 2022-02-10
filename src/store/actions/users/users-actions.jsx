import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    REGISTER_LOADING,
    USER_REGISTERED,
    REGISTER_ERROR,
    USER_EXIST,
    USERS_LIST,
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
