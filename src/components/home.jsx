import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";
import PageLoader from "./global/page-loader";
import ImageSlider from "./home/image-slider";

import ReactLoader from "react-fullpage-custom-loader";

import YouTube from "react-youtube";

import { FaCaretRight } from "react-icons/fa";

import Typography from "@mui/material/Typography";

const youtubeOpts = {
    playerVars: {
        autoplay: 0,
        enablejsapi: "1",
    },
};

const loaderProps = {
    fadeIn: false,
    sentences: [],
    wrapperBackgroundColor: "#3a3a3a",
};

const Home = () => {
    const navigate = useNavigate();

    const [loadTimeOut] = useState(10000);
    const [showLoader, setShowLoader] = useState(false);
    const [loaderFadeOut, setLoaderFadeOut] = useState(false);

    useEffect(() => {
        document.title = "Home | Henry Golden Cinema";

        document.addEventListener("DOMContentLoaded", function() {
            setShowLoader(true);
        });

        window.addEventListener("load", function() {
            setShowLoader(true);
            wait(loadTimeOut).then(() => {
                setShowLoader(false);
                setLoaderFadeOut(true);
            });
        });

        if (!showLoader) {
            document.getElementById("home-scroll").scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    });

    const wait = (delay = 0) =>
        new Promise((resolve) => setTimeout(resolve, delay));

    return (
        <>
            {showLoader ? (
                <ReactLoader
                    customLoader={<PageLoader />}
                    {...loaderProps}
                    startFadeOut={loaderFadeOut}
                />
            ) : (
                <section className="home-route">
                    <Header />
                    <ChatBot />
                    <div className="home-wrapper content-fit">
                        <div
                            className="heading-wrapper display-flex flex-row"
                            id="home-scroll"
                        >
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
                            onClick={() =>
                                navigate("/movies", {
                                    state: {
                                        elementScroll: "movies-scroll",
                                    },
                                })
                            }
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
                                    videoId="zlcJlMpgAks?showinfo=0&enablejsapi=1&origin=http://localhost:3000"
                                    opts={youtubeOpts}
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
            )}
        </>
    );
};

export default Home;
