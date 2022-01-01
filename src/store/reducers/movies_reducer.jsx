import { MOVIES_LIST } from "../types";

export default function movies(state = {}, action) {
    switch (action.type) {
        case MOVIES_LIST:
            return { ...state, users: action.payload };
        default:
            return state;
    }
}
