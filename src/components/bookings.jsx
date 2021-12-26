import React from "react";

import Collapsible from "react-collapsible";

import Typography from "@mui/material/Typography";

import { FaCaretLeft } from "react-icons/fa";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";

import Ticket from "../resources/images/Requirements-07.png";
import TicketInfo from "../resources/images/Requirements-06.png";

const Bookings = () => {
    return (
        <section className="bookings-route">
            <Header />
            <ChatBot />

            <div className="bookings-wrapper content-fit">
                <Typography variant="h3" component="div">
                    <b>Henry's Bookings</b>
                </Typography>

                <div className="bookings">
                    <Collapsible
                        trigger={["Spider Man Far From Home", <FaCaretLeft />]}
                    >
                        <div className="ticket-wrapper display-flex flex-row">
                            <img
                                src={Ticket}
                                alt="ticket"
                                className="prevent-drag"
                            />
                            <img
                                src={TicketInfo}
                                alt="ticket"
                                className="prevent-drag"
                            />
                        </div>

                        <div className="ticket-operations display-flex flex-row">
                            <button className="btn-1">Save</button>
                            <a href="underDiv.com" className="prevent-drag">
                                Cancel ticket
                            </a>
                        </div>
                    </Collapsible>
                    <Collapsible
                        trigger={["Spider Man Far From Home", <FaCaretLeft />]}
                    >
                        <div className="ticket-wrapper display-flex flex-row">
                            <img
                                src={Ticket}
                                alt="ticket"
                                className="prevent-drag"
                            />
                            <img
                                src={TicketInfo}
                                alt="ticket"
                                className="prevent-drag"
                            />
                        </div>

                        <div className="ticket-operations display-flex flex-row">
                            <button className="btn-1">Save</button>
                            <a href="underDiv.com" className="prevent-drag">
                                Cancel ticket
                            </a>
                        </div>
                    </Collapsible>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Bookings;
