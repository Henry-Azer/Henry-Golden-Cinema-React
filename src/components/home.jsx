import React, { useEffect } from "react";

import Header from "./global/header";
import Footer from "./global/footer";
import ChatBot from "./global/chatbot";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Henry Golden Cinema";
    });

    return (
        <section className="home-route">
            <Header />
            <ChatBot />
            <div className="home-wrapper content-fit"></div>
            <Footer />
        </section>
    );
};

export default Home;
