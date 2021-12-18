import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Movie from "./components/movie";
import Movies from "./components/movies";
import Bookings from "./components/bookings";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import GoldenChatBot from "./components/chatbot";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/movie" element={<Movie />} />
            <Route exact path="/bookings" element={<Bookings />} />
            <Route exact path="/chatbot" element={<GoldenChatBot />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    );
};

export default routes;
