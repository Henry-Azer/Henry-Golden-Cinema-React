import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { movieDetails, clearMovieDetails } from "../store/actions";

import YouTube from "react-youtube";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { FaCaretRight } from "react-icons/fa";

import Header from "./global/header";
import Footer from "./global/footer";
import Chatbot from "./global/chatbot";

const Movie = (props) => {
    const [movieDate, setMovieDate] = useState("");
    const [movieTime, setMovieTime] = useState("");
    const [ticketsNumber, setTicketsNumber] = useState("");

    const location = useLocation();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movies.movieData);

    useEffect(() => {
        document.title = "Movie | Henry Golden Cinema";
    });

    useEffect(() => {
        dispatch(movieDetails(location.state.movieId));
        return dispatch(clearMovieDetails());
    }, [dispatch, location.state.movieId]);

    const handleMovieDateChange = (event) => {
        setMovieDate(event.target.value);
    };

    const handleMovieTimeChange = (event) => {
        setMovieTime(event.target.value);
    };

    const handleTicketsNumberChange = (event) => {
        setTicketsNumber(event.target.value);
    };

    const opts = {
        height: "280",
        width: "480",
        playerVars: {
            autoplay: 0,
            origin: "https://mywebsite.com",
            enablejsapi: "1",
        },
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
        <section className="movie-route">
            <Header />
            <Chatbot />

            {movie ? (
                <div className="movie-route-wrapper  content-fit">
                    <div className="heading-wrapper display-flex flex-row">
                        <FaCaretRight className="heading-icon" />
                        <Typography
                            className="heading-title"
                            variant="h4"
                            component="div"
                        >
                            {movie.title}
                        </Typography>
                    </div>
                    <div className="movie-wrapper display-flex flex-row">
                        <div className="movie-details">
                            <img
                                className="movie-img"
                                src={movie.imgURL}
                                alt="movie-img"
                            />

                            <Box sx={{ width: "100%", maxWidth: 260 }}>
                                <Typography
                                    className="movie-title"
                                    variant="h4"
                                    component="div"
                                >
                                    {movie.title}
                                </Typography>

                                <div className="rate-wrapper display-flex flex-row">
                                    <div className="display-flex flex-row">
                                        <Typography
                                            className="info-text"
                                            variant="subtitle1"
                                            gutterBottom
                                            component="div"
                                        >
                                            Rate
                                        </Typography>
                                        <Typography
                                            className="movie-info-text"
                                            variant="subtitle1"
                                            gutterBottom
                                            component="div"
                                        >
                                            {movie.rate}/10
                                        </Typography>
                                    </div>
                                    <img
                                        className="imdb-img"
                                        src="https://akwam.in/style/assets/images/imdb.png"
                                        alt="imdb-img"
                                    />
                                </div>

                                <div className="display-flex flex-row">
                                    <Typography
                                        className="info-text"
                                        variant="subtitle1"
                                        gutterBottom
                                        component="div"
                                    >
                                        Duration
                                    </Typography>
                                    <Typography
                                        className="movie-info-text"
                                        variant="subtitle1"
                                        gutterBottom
                                        component="div"
                                    >
                                        {movie.duration} min
                                    </Typography>
                                </div>

                                <div className="details-wrapper">
                                    <div className="display-flex flex-row">
                                        <Typography
                                            className="info-text"
                                            variant="subtitle1"
                                            gutterBottom
                                            component="div"
                                        >
                                            Stars
                                        </Typography>
                                        <Typography
                                            className="movie-info-text"
                                            variant="subtitle1"
                                            gutterBottom
                                            component="div"
                                        >
                                            {movie.actors.map((actor) => (
                                                <Typography
                                                    className="info-text"
                                                    variant="subtitle1"
                                                    gutterBottom
                                                    component="div"
                                                    key={actor}
                                                >
                                                    {actor}
                                                </Typography>
                                            ))}
                                        </Typography>
                                    </div>
                                    <div className="display-flex flex-row">
                                        <Typography
                                            className="info-text"
                                            variant="subtitle1"
                                            gutterBottom
                                            component="div"
                                        >
                                            Writer
                                        </Typography>
                                        <Typography
                                            className="movie-info-text"
                                            variant="subtitle1"
                                            gutterBottom
                                            component="div"
                                        >
                                            {movie.writers.map((Writer) => (
                                                <Typography
                                                    className="info-text"
                                                    variant="subtitle1"
                                                    gutterBottom
                                                    component="div"
                                                    key={Writer}
                                                >
                                                    {Writer}
                                                </Typography>
                                            ))}
                                        </Typography>
                                    </div>
                                    <div className="display-flex flex-row">
                                        <Typography
                                            className="info-text"
                                            variant="subtitle1"
                                            gutterBottom
                                            component="div"
                                        >
                                            Director
                                        </Typography>
                                        <Typography
                                            className="movie-info-text"
                                            variant="subtitle1"
                                            gutterBottom
                                            component="div"
                                        >
                                            {movie.director}
                                        </Typography>
                                    </div>
                                </div>

                                <Typography
                                    variant="body2"
                                    gutterBottom
                                    component="div"
                                >
                                    <Typography variant="h5" component="div">
                                        Movie Description
                                    </Typography>
                                    {movie.description}
                                </Typography>
                            </Box>
                        </div>
                        <div className="movie-booking display-flex">
                            <div className="booking-form display-flex">
                                <FormControl
                                    variant="standard"
                                    sx={{ m: 1, minWidth: 500 }}
                                >
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
                                        <MenuItem
                                            value={getDate(threeDaysAfter)}
                                        >
                                            {getDate(threeDaysAfter)}
                                        </MenuItem>
                                        <MenuItem
                                            value={getDate(fourDaysAfter)}
                                        >
                                            {getDate(fourDaysAfter)}
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl
                                    variant="standard"
                                    sx={{ m: 1, minWidth: 500 }}
                                >
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
                                <FormControl
                                    variant="standard"
                                    sx={{ m: 1, minWidth: 500 }}
                                >
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
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    component="div"
                                >
                                    <b>Price:</b> &emsp; 100$
                                </Typography>
                            </div>
                            <div className="movie-trailer">
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    component="div"
                                >
                                    <b>Watch Trailer</b>
                                </Typography>
                                <YouTube
                                    videoId={movie.ytTrailerId}
                                    opts={opts}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>There is no movie to show!</div>
            )}
            <Footer />
        </section>
    );
};

export default Movie;
