import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { ticketBooking, clearTicketBooking, showsList, clearShowsList } from "../../store/actions";

import { RequestLoader, RequestSucceeded } from "../global/form-loader";

import Cookies from "universal-cookie";

import { Formik } from "formik";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

const cookies = new Cookies();

const BookingForm = ({ movieId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [authenticatedUserId] = useState(cookies.get("aui_cin"));
    const [showsDispatched, setShowsDispatched] = useState(false);

    const shows = useSelector((state) => state.shows.showsList);

    const ticketBookingError = useSelector(
        (state) => state.tickets.ticketBookingError
    );
    const ticketBookingRequest = useSelector(
        (state) => state.tickets.ticketBookingRequest
    );
    const ticketBookingSucceeded = useSelector(
        (state) => state.tickets.ticketBookingSucceeded
    );
    const ticketBookingErrorOccurred = useSelector(
        (state) => state.tickets.ticketBookingErrorOccurred
    );

    useEffect(() => {
        if (!showsDispatched) {
            dispatch(showsList(movieId));
            setShowsDispatched(true);
        }

        return () => {
            dispatch(clearShowsList());
            dispatch(clearTicketBooking())
        };
    }, [dispatch, showsDispatched, movieId]);

    const filterShowsByDate = () => {
        const seen = new Set();

        const showsFilteredByDate = shows.filter((show) => {
            const duplicate = seen.has(show.showDate);
            seen.add(show.showDate);
            return !duplicate;
        });

        return showsFilteredByDate;
    };

    const filterShowsForChosenDate = (date) => {
        const seen = new Set();

        const showsFilteredByDate = shows.filter((show) => {
            const duplicate = seen.has(show.showTime);
            seen.add(show.showTime);
            return !duplicate && show.showDate === date;
        });

        return showsFilteredByDate;
    };

    const filterShowsForChosenTime = (time, date) => {
        const showsFilteredByDateAndTime = shows.filter((show) => {
            return show.showTime === time && show.showDate === date;
        });

        return showsFilteredByDateAndTime;
    };

    const filterShowSeats = (time, date) => {
        const showsFilteredByDateAndTime = filterShowsForChosenTime(time, date);
        const bookedSeats = showsFilteredByDateAndTime[0].seats;
        let availableSeats = [];

        for (let i = 1; i < 51; i++)
            if (!bookedSeats.includes(i)) availableSeats.push(i);

        return availableSeats;
    };

    return (
        <div className="booking-form display-flex">
            {shows ? (
                <>
                    <Typography variant="h5" gutterBottom component="div">
                        Book Ticket Now!
                    </Typography>
                    <Formik
                        initialValues={{
                            date: "",
                            time: "",
                            seat: "",
                        }}
                        validate={(values) => {
                            const errors = {};

                            // Date Validation
                            if (!values.date) errors.date = "Required";

                            // Time Validation
                            if (!values.time) errors.time = "Required";

                            // Seat Validation
                            if (!values.seat) errors.seat = "Required";

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            dispatch(
                                ticketBooking(
                                    values,
                                    movieId,
                                    authenticatedUserId
                                )
                            );

                            setTimeout(() => {
                                setSubmitting(false);
                                resetForm();
                                dispatch(showsList(movieId));
                            }, 8000);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit} className="form-1">
                                <div className="form-wrapper display-flex">
                                    <FormControl
                                        variant="standard"
                                        className="form-control"
                                    >
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Date
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            label="Date"
                                            name="date"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {filterShowsByDate().map(
                                                (show, i) => (
                                                    <MenuItem
                                                        key={i}
                                                        value={show.showDate}
                                                    >
                                                        {show.showDate}
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                    <span>
                                        {errors.date &&
                                            touched.date &&
                                            errors.date}
                                    </span>

                                    <FormControl
                                        variant="standard"
                                        className="form-control"
                                    >
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Time
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            label="Time"
                                            name="time"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.time}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {values.date !== ""
                                                ? filterShowsForChosenDate(
                                                      values.date
                                                  ).map((show, i) => (
                                                      <MenuItem
                                                          key={i}
                                                          value={show.showTime}
                                                      >
                                                          {show.showTime}
                                                      </MenuItem>
                                                  ))
                                                : null}
                                        </Select>
                                    </FormControl>
                                    <span>
                                        {errors.time &&
                                            touched.time &&
                                            errors.time}
                                    </span>

                                    <FormControl
                                        variant="standard"
                                        className="form-control"
                                    >
                                        <InputLabel id="demo-simple-select-standard-label">
                                            Seat
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            label="Seat Number"
                                            name="seat"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.seat}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {filterShowsForChosenTime(
                                                values.time,
                                                values.date
                                            ).map((show, i) =>
                                                filterShowSeats(
                                                    values.time,
                                                    values.date
                                                ).map((seat, i) => (
                                                    <MenuItem
                                                        key={i}
                                                        value={seat}
                                                    >
                                                        {seat}
                                                    </MenuItem>
                                                ))
                                            )}
                                        </Select>
                                    </FormControl>
                                    <span>
                                        {errors.seat &&
                                            touched.seat &&
                                            errors.seat}
                                    </span>
                                </div>

                                <div className="form-submission display-flex">
                                    {ticketBookingRequest ? (
                                        <RequestLoader />
                                    ) : null}

                                    {ticketBookingSucceeded &&
                                    !ticketBookingRequest ? (
                                        <RequestSucceeded />
                                    ) : null}

                                    {!ticketBookingSucceeded &&
                                    ticketBookingErrorOccurred &&
                                    !ticketBookingRequest ? (
                                        <Typography
                                            variant="h6"
                                            component="span"
                                            gutterBottom
                                        >
                                            {ticketBookingError}
                                        </Typography>
                                    ) : null}

                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        component="div"
                                    >
                                        <b>Price:</b> &nbsp; 100$
                                    </Typography>

                                    <button
                                        className="btn-1"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Book
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </>
            ) : (
                <>
                    <br />
                    <Typography variant="h6" component="div" gutterBottom>
                        Tickets are sold out.
                    </Typography>
                    <Typography variant="h5" component="div" gutterBottom>
                        Book another movie now!
                    </Typography>
                    <button
                        className="btn-1"
                        onClick={() =>
                            navigate("/movies", {
                                state: {
                                    elementScroll: "movies-scroll",
                                },
                            })
                        }
                    >
                        Movies
                    </button>
                </>
            )}
        </div>
    );
};

export default BookingForm;
