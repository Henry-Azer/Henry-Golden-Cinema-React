import {
    TICKETS_LIST_USER_REQUEST,
    TICKETS_LIST_USER_SUCCEEDED,
    TICKETS_LIST_USER_ERROR,
    CLEAR_TICKETS_LIST_USER,
    TICKET_BOOKING_REQUEST,
    TICKET_BOOKING_SUCCEEDED,
    TICKET_BOOKING_ERROR,
    CLEAR_TICKET_BOOKING,
    TICKET_CANCEL_REQUEST,
    TICKET_CANCEL_SUCCEEDED,
    TICKET_CANCEL_ERROR,
} from "../actions/types";

export default function tickets_reducer(state = {}, action) {
    switch (action.type) {
        // LIST OF USER TICKETS
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
        case CLEAR_TICKETS_LIST_USER:
            return {
                ...state,
                ticketsListUser: action.payload,
            };

        // BOOK TICKET
        case TICKET_BOOKING_REQUEST:
            return { ...state, ticketBookingRequest: true };
        case TICKET_BOOKING_SUCCEEDED:
            return {
                ...state,
                ticketBooked: action.payload,
                ticketBookingRequest: false,
                ticketBookingSucceeded: true,
                ticketBookingErrorOccurred: false,
            };
        case TICKET_BOOKING_ERROR:
            return {
                ...state,
                ticketBookingError: action.payload,
                ticketBookingRequest: false,
                ticketBookingSucceeded: false,
                ticketBookingErrorOccurred: true,
            };

        case CLEAR_TICKET_BOOKING:
            return {
                ...state,
                ticketBooked: action.payload,
                ticketBookingSucceeded: action.payload,
                ticketBookingRequest: action.payload,
                ticketBookingError: action.payload,
                ticketBookingErrorOccurred: action.payload,
            };

        // CANCEL BOOKED TICKET
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
