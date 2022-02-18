import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { nowPlayingMoviesList } from "../../store/actions";

import Slider from "react-slick";

const LoadingImgURL =
    "https://camo.githubusercontent.com/3bec5c0c93180a4bfaaabe7a2cdcefb6cada4bb47fa19f6e43cc9498ba79efe0/687474703a2f2f692e696d6775722e636f6d2f637873543772532e676966";

const Home = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.movies.moviesLoading);
    const nowPlayingMovies = useSelector(
        (state) => state.movies.nowPlayingMovies
    );

    useEffect(() => {
        dispatch(nowPlayingMoviesList());
    }, [dispatch]);

    var settings = {
        dots: true,
        arrows: false,
        draggable: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            {nowPlayingMovies ? (
                <Slider className="slick-slider" {...settings}>
                    {nowPlayingMovies.map((movie) => (
                        <img
                            key={movie.id}
                            className="slider-img"
                            src={loading ? LoadingImgURL : movie.imgURL}
                            alt="slider-img"
                        />
                    ))}
                </Slider>
            ) : (
                <Slider className="slick-slider" {...settings}>
                    <img
                        className="slider-img"
                        src={LoadingImgURL}
                        alt="slider-img"
                    />
                    <img
                        className="slider-img"
                        src={LoadingImgURL}
                        alt="slider-img"
                    />
                    <img
                        className="slider-img"
                        src={LoadingImgURL}
                        alt="slider-img"
                    />
                    <img
                        className="slider-img"
                        src={LoadingImgURL}
                        alt="slider-img"
                    />
                    <img
                        className="slider-img"
                        src={LoadingImgURL}
                        alt="slider-img"
                    />
                    <img
                        className="slider-img"
                        src={LoadingImgURL}
                        alt="slider-img"
                    />
                </Slider>
            )}
        </div>
    );
};

export default Home;
