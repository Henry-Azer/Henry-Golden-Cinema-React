import React, { useEffect } from "react";

import Slider from "react-slick";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Henry Golden Cinema";
    });

    var settings = {
        dots: false,
        arrows: false,
        draggable: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
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
            <div>
                <img
                    className="slider-img"
                    src="https://cdn.europosters.eu/image/750/posters/avengers-endgame-journey-s-end-i73600.jpg"
                    alt="slider-img"
                />
            </div>
            <div>
                <img
                    className="slider-img"
                    src="https://m.media-amazon.com/images/I/81LHuCYlgEL._AC_SY679_.jpg"
                    alt="slider-img"
                />
            </div>
            <div>
                <img
                    className="slider-img"
                    src="https://m.media-amazon.com/images/I/A1PaCX4oXjL._AC_SY679_.jpg"
                    alt="slider-img"
                />
            </div>
            <div>
                <img
                    className="slider-img"
                    src="https://m.media-amazon.com/images/I/51BtS7ehWTL._AC_.jpg"
                    alt="slider-img"
                />
            </div>

            <div>
                <img
                    className="slider-img"
                    src="https://i.ebayimg.com/images/g/dAYAAOSwTxhfxK3x/s-l1600.jpg"
                    alt="slider-img"
                />
            </div>
            <div>
                <img
                    className="slider-img"
                    src="https://assets.voxcinemas.com/posters/P_HO00006784.jpg"
                    alt="slider-img"
                />
            </div>
        </Slider>
    );
};

export default Home;
