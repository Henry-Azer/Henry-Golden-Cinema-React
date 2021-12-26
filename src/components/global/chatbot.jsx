import React, { useState, Component } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import ChatBot from "react-simple-chatbot";

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

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            gender: "",
            age: "",
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, gender, age } = steps;

        this.setState({ name, gender, age });
    }

    render() {
        const { name, gender, age } = this.state;
        return (
            <div style={{ width: "100%" }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name.value}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{gender.value}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{age.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

const GoldenChatbot = (props) => {
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
                        steps={[
                            {
                                id: "start",
                                message: "Hello Guest! I'm here to help you.",
                                trigger: "2",
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
                                        trigger: () => navigate("/movies"),
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
                                trigger: "5",
                            },
                            {
                                id: "5",
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
                                trigger: "7",
                            },
                            {
                                id: "7",
                                user: true,
                                trigger: "8",
                                validator: (value) => {
                                    if (isNaN(value)) {
                                        return "value must be a number";
                                    } else if (value < 0) {
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
                        {...config}
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
