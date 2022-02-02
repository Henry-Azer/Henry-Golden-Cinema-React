import axios from "axios";
import { MOVIES_LIST, CLEAR_USER_LIST } from "../types";

const URL = "http://localhost:8080";

export function moviesList() {
    const request = axios.get(URL + "/api/movie/all").then((response) => response.data);

    return {
        type: MOVIES_LIST,
        payload: request,
    };
}

export function clearUserList() {
    return {
        type: CLEAR_USER_LIST,
        payload: null,
    };
}
