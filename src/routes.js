import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import GoldenChatBot from "./components/chatbot";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/chatbot" element={<GoldenChatBot />} />
        </Routes>
    );
};

export default routes;
