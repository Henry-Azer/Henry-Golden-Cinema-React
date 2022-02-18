import React from "react";
import { useNavigate } from "react-router-dom";

import Collapsible from "react-collapsible";

import Typography from "@mui/material/Typography";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { Facebook as ContentLoader } from "react-content-loader";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";

import TicketInfo from "../resources/images/Requirements-06.png";

const Bookings = () => {
    const navigate = useNavigate();

    const tickets = null;
    const loading = true;

    return (
        <section className="bookings-route">
            <Header />
            <ChatBot />

            <div className="bookings-wrapper content-fit">
                <div className="heading-wrapper display-flex flex-row">
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
                                        onClick={() => navigate("/movies")}
                                        type="submit"
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
