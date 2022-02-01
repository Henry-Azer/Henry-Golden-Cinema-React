import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { moviesList, clearUserList } from "../store/actions";

import Typography from "@mui/material/Typography";

import { FaCaretRight } from "react-icons/fa";

import Header from "./global/header";
import Footer from "./global/footer";
import Chatbot from "./global/chatbot";

const Movies = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        dispatch(moviesList());
    }, [dispatch]);

    return (
        <section className="movies-route">
            <Header />
            <Chatbot />
            <div className="movies-wrapper content-fit">
                <div className="heading-wrapper display-flex flex-row">
                    <FaCaretRight className="heading-icon" />
                    <Typography
                        className="heading-title"
                        variant="h4"
                        component="div"
                    >
                        Now Playing
                    </Typography>
                </div>
                <div className="movies-cards display-flex flex-row">
                    <div className="movie-card">
                        <img
                            className="movie-card-img"
                            src="https://assets.voxcinemas.com/posters/P_HO00006784.jpg"
                            alt="movie-img"
                        />
                        <Typography
                            className="movie-name"
                            variant="h6"
                            component="div"
                        >
                            Spider Man - Far From Home
                        </Typography>
                        <div className="movie-card-info">
                            <div className="rate-wrapper display-flex flex-row">
                                <Typography
                                    className="rate-number"
                                    variant="subtitle1"
                                    component="div"
                                >
                                    8.3/10
                                </Typography>
                                <img
                                    className="imdb-img"
                                    src="https://akwam.in/style/assets/images/imdb.png"
                                    alt="imdb"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Movies;
