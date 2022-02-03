import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { moviesList } from "../../store/actions";

import Slider from "react-slick";

const Home = () => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        document.title = "Home | Henry Golden Cinema";
    });

    useEffect(() => {
        dispatch(moviesList());
    }, [dispatch]);

    var settings = {
        dots: false,
        arrows: false,
        draggable: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2500,
        centerPadding: "-10px",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider className="slick-slider" {...settings}>
            {movies ? (
                movies.map((movie) => (
                    <div key={movie.id}>
                        <img
                            className="slider-img"
                            src={movie.imgURL}
                            alt="slider-img"
                        />
                    </div>
                ))
            ) : (
                <div>There are no movies to show!</div>
            )}
        </Slider>
    );
};

export default Home;
