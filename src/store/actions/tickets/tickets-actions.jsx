import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    TICKETS_LIST_USER_REQUEST,
    TICKETS_LIST_USER_ERROR,
    TICKETS_LIST_USER_SUCCEEDED,
} from "../types";

import Cookies from "universal-cookie";

const cookies = new Cookies();

var authenticatedUserId = cookies.get("aui_cin");

const URL = "http://localhost:8080/api/ticket";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const ticketsListUser = () => (dispatch) => {
    dispatch({ type: TICKETS_LIST_USER_REQUEST });

    api.get(`${URL}/all`, {
        delay: 1000,
    })
        .then(function(response) {
            if (response.data.status === 200) {
                dispatch({
                    type: TICKETS_LIST_USER_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: TICKETS_LIST_USER_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};

export const cancelBookedTicket = () => (dispatch) => {
    dispatch({ type: TICKETS_LIST_USER_REQUEST });

    api.get(`${URL}/all`, {
        delay: 1000,
    })
        .then(function(response) {
            if (response.data.status === 200) {
                dispatch({
                    type: TICKETS_LIST_USER_SUCCEEDED,
                    payload: response.data.body,
                });
            } else {
                dispatch({
                    type: TICKETS_LIST_USER_ERROR,
                    payload: response.data.message,
                });
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};
