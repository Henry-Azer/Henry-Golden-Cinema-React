import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import ChatBot from "./components/chatbot";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/chatbot" element={<ChatBot />} />
        </Routes>
    );
};

export default routes;
