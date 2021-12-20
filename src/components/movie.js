import React from "react";

import YouTube from "react-youtube";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import BackgroundOne from '../..//resources/backgrounds/Requirements-01.png';

import Header from "./global/header";
import Footer from "./global/footer";

const Movie = () => {
    const [movieDate, setMovieDate] = React.useState("");
    const [movieTime, setMovieTime] = React.useState("");
    const [ticketsNumber, setTicketsNumber] = React.useState("");

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
            {/* <Header /> */}
            <div className="movie-wrapper">
                <div className="movie-details">
                    <img
                        src="https://assets.voxcinemas.com/posters/P_HO00006784.jpg"
                        alt="far from home"
                    />

                    <Box sx={{ width: "100%", maxWidth: 260 }}>
                        <Typography variant="h4" component="div">
                            <b>
                                Spider-Man <br /> Far From Home
                            </b>
                        </Typography>

                        <div className="rate-wrapper">
                            <Typography variant="subtitle1" component="div">
                                <b>Rate:</b> &emsp;&emsp;&emsp; 8.3/10
                            </Typography>
                            <img
                                src="https://akwam.in/style/assets/images/imdb.png"
                                alt="la casa"
                            />
                        </div>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            component="div"
                        >
                            <b>Duration:</b> &ensp;&nbsp; 131 min
                        </Typography>

                        <div className="details-wrapper">
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                <b>Director:</b> &emsp; Henry Azer
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                <b>Writer:</b> &emsp;&emsp;&nbsp; Hassan
                                Shakoosh
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                <b>Stars:</b> &emsp;&emsp;&ensp;&nbsp; bavly
                                ashraf, alper ashraf
                            </Typography>
                        </div>

                        <Typography
                            variant="body2"
                            gutterBottom
                            component="div"
                        >
                            <Typography variant="h5" component="div">
                                <b>Movie Description</b>
                            </Typography>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout.
                        </Typography>
                    </Box>
                </div>
                <div className="movie-booking">
                    <div className="booking-form">
                        <FormControl
                            variant="standard"
                            sx={{ m: 1, minWidth: 500 }}
                        >
                            <InputLabel id="demo-simple-select-standard-label">
                                Choose date
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={movieDate}
                                onChange={handleMovieDateChange}
                                label="Choose date"
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
                         <FormControl
                            variant="standard"
                            sx={{ m: 1, minWidth: 500 }}
                        >
                            <InputLabel id="demo-simple-select-standard-label">
                                Choose Tickets Number
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={movieTime}
                                onChange={handleMovieTimeChange}
                                label="Choose Time"
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
                                Choose Tickets Number
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={ticketsNumber}
                                onChange={handleTicketsNumberChange}
                                label="Choose Tickets Number"
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
                            <b>Price:</b> &emsp; 0$
                        </Typography>
                    </div>
                    <div className="movie-trailer">
                        <Typography variant="h5" gutterBottom component="div">
                            <b>Watch Trailer</b>
                        </Typography>
                        <YouTube videoId="Nt9L1jCKGnE" opts={opts} />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </section>
    );
};

export default Movie;
