import {
    REVIEW_REQUEST,
    REVIEW_SUCCEEDED,
    REVIEW_ERROR,
} from "../actions/types.jsx";

export default function reviews_reducer(state = {}, action) {
    switch (action.type) {
        // RARE AND MESSAGE
        case REVIEW_REQUEST:
            return { ...state, reviewRequest: true };
        case REVIEW_SUCCEEDED:
            return {
                ...state,
                reviewRequest: false,
                reviewSucceeded: true,
            };
        case REVIEW_ERROR:
            return {
                ...state,
                submissionError: action.payload,
                reviewRequest: false,
                reviewSucceeded: false,
            };
        default:
            return state;
    }
}
