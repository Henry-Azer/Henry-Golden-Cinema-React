import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";

import TicketInfo from "../resources/images/img-04.png";

import Collapsible from "react-collapsible";

import { Facebook as ContentLoader } from "react-content-loader";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import Typography from "@mui/material/Typography";

const Bookings = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state;

    const tickets = null;
    const loading = null;

    useEffect(() => {
        document.title = "Bookings | Henry Golden Cinema";

        if (locationState !== null)
            document
                .getElementById(locationState.elementScroll)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
    }, [locationState]);

    return (
        <section className="bookings-route">
            <Header />
            <ChatBot />

            <div className="bookings-wrapper content-fit">
                <div
                    className="heading-wrapper display-flex flex-row"
                    id="bookings-scroll"
                >
                    <FaCaretRight className="heading-icon" />
                    <Typography
                        className="heading-title"
                        variant="h4"
                        component="div"
                    >
                        Henry's Bookings
                    </Typography>
                </div>

                <div className="bookings">
                    {tickets ? (
                        tickets.map((ticket) => (
                            <Collapsible
                                trigger={[
                                    "Spider Man Far From Home",
                                    <FaCaretLeft />,
                                ]}
                            >
                                <div className="ticket-wrapper display-flex flex-row">
                                    <img
                                        src={TicketInfo}
                                        alt="ticket"
                                        className="prevent-drag"
                                    />
                                </div>

                                <div className="ticket-operations display-flex">
                                    <button className="btn-1">Save</button>
                                    <a
                                        href="underDiv.com"
                                        className="prevent-drag"
                                    >
                                        Cancel ticket
                                    </a>
                                </div>
                            </Collapsible>
                        ))
                    ) : (
                        <>
                            {loading ? (
                                <div className="content-loader">
                                    <ContentLoader
                                        speed={2}
                                        foregroundColor={"#999999"}
                                    />
                                </div>
                            ) : (
                                <div className="empty-collapsible">
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        gutterBottom
                                    >
                                        You didn't book any tickets until now!
                                    </Typography>
                                    <button
                                        className="btn-1"
                                        onClick={() =>
                                            navigate("/movies", {
                                                state: {
                                                    elementScroll:
                                                        "movies-scroll",
                                                },
                                            })
                                        }
                                    >
                                        Book Now
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Bookings;
