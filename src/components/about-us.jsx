import React, { useEffect } from "react";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";

const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us | Henry Golden Cinema";
    });

    return (
        <section className="about-us-route">
            <Header />
            <ChatBot />
            <div className="about-us-wrapper content-fit"></div>
            <Footer />
        </section>
    );
};

export default AboutUs;
