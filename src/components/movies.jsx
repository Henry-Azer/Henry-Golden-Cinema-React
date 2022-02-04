import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { moviesList } from "../store/actions";

import Typography from "@mui/material/Typography";

import { FaCaretRight } from "react-icons/fa";

import Header from "./global/header";
import Footer from "./global/footer";
import Chatbot from "./global/chatbot";

const LoadingImgURL =
    "https://camo.githubusercontent.com/3bec5c0c93180a4bfaaabe7a2cdcefb6cada4bb47fa19f6e43cc9498ba79efe0/687474703a2f2f692e696d6775722e636f6d2f637873543772532e676966";

const Movies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    const loading = useSelector((state) => state.movies.moviesLoading);

    useEffect(() => {
        document.title = "Movies | Henry Golden Cinema";
    });

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
                    {movies ? (
                        movies.map((movie) => (
                            <div
                                key={movie.id}
                                className="movie-card"
                                onClick={() =>
                                    navigate(
                                        `/movies/` +
                                            movie.title
                                                .replace(/\s+/g, "-")
                                                .toLowerCase(),
                                        { state: { movie: movie } }
                                    )
                                }
                            >
                                <img
                                    className="movie-card-img"
                                    src={loading ? LoadingImgURL : movie.imgURL}
                                    alt="movie-img"
                                />
                                <Typography
                                    className="movie-name"
                                    variant="h6"
                                    component="div"
                                >
                                    {movie.title}
                                </Typography>
                                <div className="movie-card-info">
                                    <div className="rate-wrapper display-flex flex-row">
                                        <Typography
                                            className="rate-number"
                                            variant="subtitle1"
                                            component="div"
                                        >
                                            {movie.rate}/10
                                        </Typography>
                                        <img
                                            className="imdb-img"
                                            src="https://akwam.in/style/assets/images/imdb.png"
                                            alt="imdb"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            {[...Array(3)].map((e, i) => (
                                <div className="movie-card" key={i}>
                                    <img
                                        className="movie-card-img"
                                        src={LoadingImgURL}
                                        alt="movie-img"
                                    />
                                    <Typography
                                        className="movie-name"
                                        variant="h6"
                                        component="div"
                                    >
                                        ...
                                    </Typography>
                                    <div className="movie-card-info">
                                        <div className="rate-wrapper display-flex flex-row">
                                            <Typography
                                                className="rate-number"
                                                variant="subtitle1"
                                                component="div"
                                            >
                                                ~/10
                                            </Typography>
                                            <img
                                                className="imdb-img"
                                                src="https://akwam.in/style/assets/images/imdb.png"
                                                alt="imdb"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Movies;
