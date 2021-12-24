import React, { useEffect } from "react";

import Header from "./global/header";
import Footer from "./global/footer";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Henry Golden Cinema";
    });
    
    return (
        <section className="home-route">
            <Header />
            <h1>Home Page 1</h1>
            <Footer />
        </section>
    );
};

export default Home;
