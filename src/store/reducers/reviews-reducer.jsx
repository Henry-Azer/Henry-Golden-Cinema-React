import {
    REVIEW_SUBMITTED,
    SUBMISSION_ERROR,
    SUBMISSION_LOADING,
} from "../actions/types.jsx";

export default function reviews_reducer(state = {}, action) {
    switch (action.type) {
        case SUBMISSION_LOADING:
            return { ...state, submissionLoading: true };
        case REVIEW_SUBMITTED:
            return {
                ...state,
                submissionLoading: false,
                submissionSucceeded: true,
            };
        case SUBMISSION_ERROR:
            return {
                ...state,
                submissionError: action.payload,
                submissionSucceeded: false,
                submissionLoading: false,
            };
        default:
            return state;
    }
}
