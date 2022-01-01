import axios from "axios";
import { MOVIES_LIST } from "../types";

const URL = "https://jsonplaceholder.typicode.com";

export function moviesList() {
    const request = axios.get(URL + "/users").then((response) => response.data);

    return {
        type: MOVIES_LIST,
        payload: request,
    };
}

// export function clearUserList() {
//     return {
//         type: CLEAR_USER_LIST,
//         payload: null,
//     };
// }
