import React, { useState } from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

const BookingForm = () => {
    const [movieDate, setMovieDate] = useState("");
    const [movieTime, setMovieTime] = useState("");
    const [ticketsNumber, setTicketsNumber] = useState("");

    const handleMovieDateChange = (event) => {
        setMovieDate(event.target.value);
    };

    const handleMovieTimeChange = (event) => {
        setMovieTime(event.target.value);
    };

    const handleTicketsNumberChange = (event) => {
        setTicketsNumber(event.target.value);
    };

    var today = new Date();
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 1);
    const twoDaysAfter = new Date(dayAfter);
    twoDaysAfter.setDate(twoDaysAfter.getDate() + 1);
    const threeDaysAfter = new Date(twoDaysAfter);
    threeDaysAfter.setDate(threeDaysAfter.getDate() + 1);
    const fourDaysAfter = new Date(threeDaysAfter);
    fourDaysAfter.setDate(fourDaysAfter.getDate() + 1);

    const getDate = (day) => {
        return (
            day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate()
        );
    };
    return (
        <div className="booking-form">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 500 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    Date
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={movieDate}
                    onChange={handleMovieDateChange}
                    label="Date"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={getDate(dayAfter)}>
                        {getDate(dayAfter)}
                    </MenuItem>
                    <MenuItem value={getDate(twoDaysAfter)}>
                        {getDate(twoDaysAfter)}
                    </MenuItem>
                    <MenuItem value={getDate(threeDaysAfter)}>
                        {getDate(threeDaysAfter)}
                    </MenuItem>
                    <MenuItem value={getDate(fourDaysAfter)}>
                        {getDate(fourDaysAfter)}
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 500 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    Time
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={movieTime}
                    onChange={handleMovieTimeChange}
                    label="Time"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="02:00">02:00</MenuItem>
                    <MenuItem value="04:00">04:00</MenuItem>
                    <MenuItem value="06:00">06:00</MenuItem>
                    <MenuItem value="08:00">08:00</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 500 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    Tickets Number
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={ticketsNumber}
                    onChange={handleTicketsNumberChange}
                    label="Tickets Number"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                    <MenuItem value={5}>Five</MenuItem>
                </Select>
            </FormControl>

            <button className="btn-1">Book Now</button>
            <Typography variant="subtitle1" gutterBottom component="div">
                <b>Price:</b> &emsp; 100$
            </Typography>
        </div>
    );
};

export default BookingForm;
