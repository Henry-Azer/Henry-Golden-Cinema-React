import {
    TICKETS_LIST_USER_REQUEST,
    TICKETS_LIST_USER_SUCCEEDED,
    TICKETS_LIST_USER_ERROR,
    TICKET_CANCEL_REQUEST,
    TICKET_CANCEL_SUCCEEDED,
    TICKET_CANCEL_ERROR,
} from "../actions/types";

export default function tickets_reducer(state = {}, action) {
    switch (action.type) {
        case TICKETS_LIST_USER_REQUEST:
            return { ...state, ticketsListUserRequest: true };
        case TICKETS_LIST_USER_SUCCEEDED:
            return {
                ...state,
                ticketsListUser: action.payload,
                ticketsListUserRequest: false,
            };
        case TICKETS_LIST_USER_ERROR:
            return {
                ...state,
                ticketsListUserError: action.payload,
                ticketsListUserRequest: false,
            };
        case TICKET_CANCEL_REQUEST:
            return { ...state, ticketCancelRequest: true };
        case TICKET_CANCEL_SUCCEEDED:
            return {
                ...state,
                ticketCancel: action.payload,
                ticketCancelRequest: false,
            };
        case TICKET_CANCEL_ERROR:
            return {
                ...state,
                ticketCancelError: action.payload,
                ticketCancelRequest: false,
            };
        default:
            return state;
    }
}
