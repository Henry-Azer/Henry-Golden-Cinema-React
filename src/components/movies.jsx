import React from "react";

import { connect } from "react-redux";
import { moviesList } from "../store/actions/actions";

import Typography from "@mui/material/Typography";

import { FaCaretRight } from "react-icons/fa";

import Header from "./global/header";
import Footer from "./global/footer";
import Chatbot from "./global/chatbot";

const Movies = () => {
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
                    <div className="movie-card">
                        <img
                            className="movie-card-img"
                            src="https://i.ebayimg.com/images/g/dAYAAOSwTxhfxK3x/s-l1600.jpg"
                            alt="movie-img"
                        />
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
                    <div className="movie-card">
                        <img
                            className="movie-card-img"
                            src="https://m.media-amazon.com/images/I/51BtS7ehWTL._AC_.jpg"
                            alt="movie-img"
                        />
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
                    <div className="movie-card">
                        <img
                            className="movie-card-img"
                            src="https://cdn.europosters.eu/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg"
                            alt="movie-img"
                        />
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
                    <div className="movie-card">
                        <img
                            className="movie-card-img"
                            src="https://m.media-amazon.com/images/I/81LHuCYlgEL._AC_SY679_.jpg"
                            alt="movie-img"
                        />
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
                    <div className="movie-card">
                        <img
                            className="movie-card-img"
                            src="https://m.media-amazon.com/images/I/A1PaCX4oXjL._AC_SY679_.jpg"
                            alt="movie-img"
                        />
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

function mapStateToProps(state) {
    return {
        movies: state.movies,
    };
}

export default connect(mapStateToProps)(Movies);
