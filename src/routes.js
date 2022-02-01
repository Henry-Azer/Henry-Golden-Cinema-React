import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Movie from "./components/movie";
import Movies from "./components/movies";
import Bookings from "./components/bookings";
import AboutUs from "./components/about-us";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import ErrorPage from "./components/global/error-page";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movies" element={<Movies />} />
            <Route exact path="/movie" element={<Movie />} />
            <Route exact path="/bookings" element={<Bookings />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/error" element={<ErrorPage />} />
        </Routes>
    );
};

export default routes;
