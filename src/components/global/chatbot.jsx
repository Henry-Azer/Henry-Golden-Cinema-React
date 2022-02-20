import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { submitRate } from "../../store/actions";

import ChatBot from "react-simple-chatbot";

import PropTypes from "prop-types";

import { FaComments } from "react-icons/fa";
import { ThemeProvider } from "styled-components";

// ChatBot theme provider
const theme = {
    background: "#f2f2f2",
    fontFamily: "Century Gothic",
    headerBgColor: "#e5890a",
    headerFontColor: "#f2f2f2",
    headerFontSize: "17px",
    botBubbleColor: "#3a3a3a",
    botFontColor: "#f2f2f2",
    userBubbleColor: "#e5890a",
    userFontColor: "#f2f2f2",
};

// ChatBot config props
const config = {
    width: "320px",
    height: "400px",
    hideUserAvatar: false,
    placeholder: "Type your response.",
    headerTitle: "Golden Chatbot",
};

let submitted = false;

const Rate = (props) => {
    const dispatch = useDispatch();

    let rate = {
        firstTime: props.steps.firstTime.value,
        rate: props.steps.rate.value,
        review: props.steps.review.value,
    };

    if (!submitted) {
        dispatch(submitRate(rate));
        submitted = true;
    }

    return "Rate Submitted.";
};

Rate.propTypes = {
    steps: PropTypes.object,
};

Rate.defaultProps = {
    steps: undefined,
};

const GoldenChatbot = () => {
    const navigate = useNavigate();
    const [showChat, setShowChat] = useState(true);

    const startChat = () => {
        setShowChat(true);
    };
    const hideChat = () => {
        setShowChat(false);
    };

    return (
        <div className="chat-bot">
            <ThemeProvider theme={theme}>
                <div style={{ display: showChat ? "none" : "" }}>
                    <ChatBot
                        className="bot-wrapper"
                        recognitionEnable={true}
                        {...config}
                        steps={[
                            {
                                id: "start",
                                message: "Hello Guest! I'm here to help you.",
                                trigger: "1",
                            },
                            {
                                id: "1",
                                options: [
                                    {
                                        label: "Let's start",
                                        value: "let's start",
                                        trigger: "2",
                                    },
                                ],
                            },
                            {
                                id: "2",
                                message: "How can I help you!",
                                trigger: "3",
                            },
                            {
                                id: "3",
                                options: [
                                    {
                                        label: "Logging",
                                        value: "login",
                                        trigger: () => navigate("/login"),
                                    },
                                    {
                                        label: "Movies",
                                        value: "movies",
                                        trigger: () =>
                                            navigate("/movies", {
                                                state: {
                                                    elementScroll:
                                                        "movies-scroll",
                                                },
                                            }),
                                    },
                                    {
                                        label: "Bookings",
                                        value: "bookings",
                                        trigger: "bookings",
                                    },
                                    {
                                        label: "Rate us",
                                        value: "rate",
                                        trigger: "4",
                                    },
                                    {
                                        label: "I'm fine",
                                        value: "fine",
                                        trigger: "end",
                                    },
                                ],
                            },
                            {
                                id: "bookings",
                                message:
                                    "Ohh, You are too lazy! Find out Bookings in the header.",
                                trigger: "loop",
                            },
                            {
                                id: "4",
                                message:
                                    "Is this your first time in our website?",
                                trigger: "firstTime",
                            },
                            {
                                id: "firstTime",
                                options: [
                                    {
                                        label: "Yes",
                                        value: true,
                                        trigger: "first",
                                    },
                                    {
                                        label: "No!",
                                        value: false,
                                        trigger: "regular",
                                    },
                                ],
                            },
                            {
                                id: "first",
                                message: "Great, Our family has grown up!",
                                trigger: "6",
                            },
                            {
                                id: "regular",
                                message: "Awesome! Welcome in your home again.",
                                trigger: "6",
                            },
                            {
                                id: "6",
                                message: "How you rate our website? (1 to 10):",
                                trigger: "rate",
                            },
                            {
                                id: "rate",
                                user: true,
                                trigger: "8",
                                validator: (value) => {
                                    if (isNaN(value)) {
                                        return "value must be a number";
                                    } else if (value < 1) {
                                        return "value must be positive";
                                    } else if (value > 10) {
                                        return `${value}? Come on!`;
                                    }

                                    return true;
                                },
                            },
                            {
                                id: "8",
                                message: "It's {previousValue}! Looks good.",
                                trigger: "9",
                            },
                            {
                                id: "9",
                                message: "Type a review for us:",
                                trigger: "review",
                            },
                            {
                                id: "review",
                                user: true,
                                trigger: "submit",
                            },
                            {
                                id: "submit",
                                component: <Rate />,
                                asMessage: true,
                                trigger: "10",
                            },
                            {
                                id: "10",
                                message: "Thanks for your time!",
                                trigger: "loop",
                            },
                            {
                                id: "loop",
                                message: "Wanna something else?",
                                trigger: "loop-options",
                            },
                            {
                                id: "loop-options",
                                options: [
                                    {
                                        label: "Yes",
                                        value: true,
                                        trigger: "2",
                                    },
                                    {
                                        label: "No!",
                                        value: false,
                                        trigger: "end",
                                    },
                                ],
                            },
                            {
                                id: "end",
                                message:
                                    "Have a nice day! I hope I helped you!",
                                end: true,
                            },
                        ]}
                    />
                </div>
                <div className="bot-btn-container">
                    {!showChat ? (
                        <button
                            className="bot-btn btn-hover"
                            onClick={() => startChat()}
                        >
                            <FaComments />
                        </button>
                    ) : (
                        <button
                            className="bot-btn btn-hover"
                            onClick={() => hideChat()}
                        >
                            <FaComments />
                        </button>
                    )}
                </div>
            </ThemeProvider>
        </div>
    );
};

export default GoldenChatbot;
