import React from "react";

import Header from "./global/header";
import Footer from "./global/footer";
import Chatbot from "./global/chatbot";

const Movies = () => {
    return (
        <section className="movies-route">
            <Header />
            <Chatbot />
            <div className="home-wrapper content-fit"></div>
            <Footer />
        </section>
    );
};

export default Movies;
