import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { ticketsListUser, cancelBookedTicket } from "../store/actions";

import Cookies from "universal-cookie";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";

import Collapsible from "react-collapsible";

import { confirmAlert as ConfirmAlert } from "react-confirm-alert";

import { Facebook as ContentLoader } from "react-content-loader";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

const cookies = new Cookies();

const Bookings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state;

    const [isUserAuthenticated] = useState(cookies.get("iua_cin"));
    const [authenticatedUsername] = useState(cookies.get("aun_cin"));

    const [ticketsDispatched, setTicketsDispatched] = useState(false);
    const [ticketDownloaded, setTicketDownloaded] = useState(false);

    const tickets = useSelector((state) => state.tickets.ticketsListUser);
    const ticketsRequest = useSelector(
        (state) => state.tickets.ticketsListUserRequest
    );
    const ticketCancelRequest = useSelector(
        (state) => state.tickets.ticketsListUserRequest
    );

    useEffect(() => {
        document.title = "Bookings | Henry Golden Cinema";

        if (locationState !== null)
            document
                .getElementById(locationState.elementScroll)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
    }, [locationState, tickets]);

    useEffect(() => {
        if (isUserAuthenticatedCookie()) {
            if (!ticketsDispatched) {
                dispatch(ticketsListUser());
                setTicketsDispatched(true);
            }
        }
    }, [dispatch, ticketsDispatched, tickets]);

    const isUserAuthenticatedCookie = () => {
        return cookies.get("iua_cin");
    };

    const downloadTicketImage = (ticketImage, movieTitle) => {
        var ticket = base64ToArrayBuffer(ticketImage);
        saveByteArray(`${movieTitle}-Ticket.png`, ticket);
        setTicketDownloaded(true);
    };

    const base64ToArrayBuffer = (base64) => {
        var binaryString = window.atob(base64);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    };

    const saveByteArray = (reportName, byte) => {
        var blob = new Blob([byte], { type: "image/png" });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        var fileName = reportName;
        link.download = fileName;
        link.click();
    };

    const cancelTicket = (ticketId) => {
        ConfirmAlert({
            title: "Cancel Ticket",
            message: "Are you sure to do this?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        dispatch(cancelBookedTicket(ticketId));
                    },
                },
                {
                    label: "No",
                },
            ],
        });
    };

    return (
        <section className="bookings-route">
            <Header />
            <ChatBot />

            <div className="bookings-wrapper content-fit">
                {isUserAuthenticated ? (
                    <>
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
                                {authenticatedUsername}'s Bookings
                            </Typography>
                        </div>

                        <div className="bookings">
                            {tickets ? (
                                tickets.map((ticket, i) => (
                                    <Collapsible
                                        key={i}
                                        trigger={[
                                            `jj`,
                                            // `${ticket.movie.title}`,
                                            <FaCaretLeft key={i} />,
                                        ]}
                                    >
                                        <div className="ticket-wrapper display-flex flex-row">
                                            <img
                                                src={`data:image/png;base64,${ticket.image}`}
                                                alt="ticket"
                                                className="prevent-drag"
                                            />
                                        </div>
                                        <div className="ticket-operations display-flex">
                                            <div>
                                                {ticketDownloaded ? (
                                                    <>
                                                        <Alert severity="success">
                                                            Ticket downloaded
                                                            successfully!
                                                        </Alert>
                                                        <br />
                                                    </>
                                                ) : null}
                                            </div>
                                            <div>
                                                {ticketCancelRequest ? (
                                                    <>
                                                        <Alert severity="warning">
                                                            Ticket canceled
                                                            successfully!
                                                        </Alert>
                                                        <br />
                                                    </>
                                                ) : null}
                                            </div>
                                            <button
                                                className="btn-1"
                                                onClick={() =>
                                                    downloadTicketImage(
                                                        ticket.image
                                                    )
                                                }
                                            >
                                                Download
                                            </button>
                                            <button
                                                className="cancel-ticket"
                                                onClick={() =>
                                                    cancelTicket(ticket.id)
                                                }
                                            >
                                                Cancel Ticket
                                            </button>
                                        </div>
                                    </Collapsible>
                                ))
                            ) : (
                                <>
                                    {ticketsRequest ? (
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
                                                You didn't book any tickets
                                                until now!
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
                    </>
                ) : (
                    <>
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
                                User's Bookings
                            </Typography>
                        </div>
                        <div className="bookings">
                            <div className="empty-collapsible">
                                <Typography
                                    variant="h4"
                                    component="div"
                                    gutterBottom
                                >
                                    You didn't logged in until now!
                                </Typography>
                                <button
                                    className="btn-1"
                                    onClick={() => navigate("/login")}
                                >
                                    Login Now
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </section>
    );
};

export default Bookings;
