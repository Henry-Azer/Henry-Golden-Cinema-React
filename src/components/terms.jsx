import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";

import { FaCaretRight } from "react-icons/fa";

import Typography from "@mui/material/Typography";

const Terms = () => {
    const location = useLocation();
    const locationState = location.state;

    useEffect(() => {
        document.title = "Terms | Henry Golden Cinema";

        if (locationState !== null)
            document
                .getElementById(locationState.elementScroll)
                .scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });

        return () => {
            locationState.elementPosition = null;
            locationState.elementScroll = null;
        };
    }, [locationState]);

    return (
        <section className="terms-route">
            <Header />
            <ChatBot />

            <div className="terms-wrapper content-fit">
                <div className="terms-container" id="terms-conditions">
                    <div className="heading-wrapper display-flex flex-row">
                        <FaCaretRight className="heading-icon" />
                        <Typography
                            className="heading-title"
                            variant="h4"
                            component="div"
                        >
                            Terms & Conditions
                        </Typography>
                    </div>

                    <Typography
                        className="terms-text"
                        variant="h6"
                        component="div"
                    >
                        Terms of service are the legal agreements between a
                        service provider and a person who wants to use that
                        service. The person must agree to abide by the terms of
                        service in order to use the offered service. Terms of
                        service can also be merely a disclaimer, especially
                        regarding the use of websites.
                    </Typography>
                </div>

                <div className="privacy-container" id="privacy-policy">
                    <div className="heading-wrapper display-flex flex-row">
                        <FaCaretRight className="heading-icon" />
                        <Typography
                            className="heading-title"
                            variant="h4"
                            component="div"
                        >
                            Privacy Policy
                        </Typography>
                    </div>
                    <Typography
                        className="terms-text"
                        variant="h6"
                        component="div"
                    >
                        A privacy policy is a statement or legal document (in
                        privacy law) that discloses some or all of the ways a
                        party gathers, uses, discloses, and manages a customer
                        or client's data.[1] Personal information can be
                        anything that can be used to identify an individual, not
                        limited to the person's name, address, date of birth,
                        marital status, contact information, ID issue, and
                        expiry date, financial records, credit information,
                        medical history, where one travels, and intentions to
                        acquire goods and services.
                    </Typography>
                </div>

                <div className="cookies-container" id="cookies-policy">
                    <div className="heading-wrapper display-flex flex-row">
                        <FaCaretRight className="heading-icon" />
                        <Typography
                            className="heading-title"
                            variant="h4"
                            component="div"
                        >
                            Cookies Policy
                        </Typography>
                    </div>
                    <Typography
                        className="terms-text"
                        variant="h6"
                        component="div"
                    >
                        A cookie policy is a list of all the cookies in use on
                        your website with detailed information about each
                        tracker made available for end-users to provide them
                        with insights into how their personal data is being
                        processed when visiting your domain. Think of your
                        website's cookie policy as a map of all the tracking
                        technologies that make up your domain's data processing
                        structure, which would otherwise be operating out of
                        sight for visitors.
                    </Typography>
                </div>

                <div className="copyrights-container" id="copyrights">
                    <div className="heading-wrapper display-flex flex-row">
                        <FaCaretRight className="heading-icon" />
                        <Typography
                            className="heading-title"
                            variant="h4"
                            component="div"
                        >
                            Copyrights
                        </Typography>
                    </div>
                    <Typography
                        className="terms-text"
                        variant="h6"
                        component="div"
                    >
                        A copyright is a collection of rights that automatically
                        vest to someone who creates an original work of
                        authorship like a literary work, song, movie or
                        software. These rights include the right to reproduce
                        the work, to prepare derivative works, to distribute
                        copies, and to perform and display the work publicly.
                    </Typography>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Terms;
