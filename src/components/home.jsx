import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import YouTube from "react-youtube";

import Typography from "@mui/material/Typography";

import { FaCaretRight } from "react-icons/fa";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";
import ImageSlider from "./home/image-slider";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Home | Henry Golden Cinema";
    });

    const opts = {
        playerVars: {
            autoplay: 0,
            enablejsapi: "1",
            origin: "http://localhost:3000",
        },
    };

    return (
        <section className="home-route">
            <Header />
            <ChatBot />
            <div className="home-wrapper content-fit">
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
                <ImageSlider />

                <button
                    className="btn-1"
                    onClick={() => navigate("/movies")}
                    type="submit"
                >
                    Book Now
                </button>

                <div className="heading-wrapper display-flex flex-row">
                    <FaCaretRight className="heading-icon" />
                    <Typography
                        className="heading-title"
                        variant="h4"
                        component="div"
                    >
                        Services
                    </Typography>
                </div>
                <div className="services-wrapper">
                    <div className="services-container">
                        <YouTube
                            className="services-video"
                            videoId="zlcJlMpgAks"
                            opts={opts}
                        />
                        <div className="services">
                            <div className="service display-flex">
                                <img
                                    className="service-img"
                                    src="https://i.insider.com/5cd9d40693a1520d5c30b685?width=956&format=jpeg"
                                    alt="service-img"
                                />
                                <Typography
                                    className="heading-title"
                                    variant="h6"
                                    component="div"
                                >
                                    VIP Halls
                                </Typography>
                            </div>
                            <div className="service display-flex">
                                <img
                                    className="service-img"
                                    src="https://data1.ibtimes.co.in/en/full/648856/kerala-theatre-e-ticketing.jpg?h=450&l=50&t=40"
                                    alt="service-img"
                                />
                                <Typography
                                    className="heading-title"
                                    variant="h6"
                                    component="div"
                                >
                                    Special Rooms
                                </Typography>
                            </div>
                            <div className="service display-flex">
                                <img
                                    className="service-img"
                                    src="https://slytext.com/images/Mass%20Notification%20System.png"
                                    alt="service-img"
                                />
                                <Typography
                                    className="heading-title"
                                    variant="h6"
                                    component="div"
                                >
                                    Notify System
                                </Typography>
                            </div>
                            <div className="service display-flex">
                                <img
                                    className="service-img"
                                    src="https://i.pinimg.com/originals/3a/23/b3/3a23b3541d43c67fd71fb013749790a8.jpg"
                                    alt="service-img"
                                />
                                <Typography
                                    className="heading-title"
                                    variant="h6"
                                    component="div"
                                >
                                    Sound System
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="heading-wrapper display-flex flex-row">
                    <FaCaretRight className="heading-icon" />
                    <Typography
                        className="heading-title"
                        variant="h4"
                        component="div"
                    >
                        Various Halls
                    </Typography>
                </div>
                <div className="halls-wrapper display-flex flex-row">
                    <img
                        className="hall-img"
                        src="https://egy.voxcinemas.com/assets/images/experience/panel-imx-300x150.jpg"
                        alt="hall-img"
                    />
                    <img
                        className="hall-img"
                        src="https://egy.voxcinemas.com/assets/images/experience/panel-mx-300x150.jpg"
                        alt="hall-img"
                    />
                    <img
                        className="hall-img"
                        src="https://egy.voxcinemas.com/assets/images/experience/panel-gd-300x150.jpg"
                        alt="hall-img"
                    />
                    <img
                        className="hall-img"
                        src="https://egy.voxcinemas.com/assets/images/experience/panel-fx-300x150.jpg"
                        alt="hall-img"
                    />
                    <img
                        className="hall-img"
                        src="https://egy.voxcinemas.com/assets/images/experience/panel-kd-300x150.jpg"
                        alt="hall-img"
                    />
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Home;
