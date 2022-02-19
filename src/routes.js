import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";

import Movie from "./components/movie";
import Movies from "./components/movies";
import Bookings from "./components/bookings";

import Terms from "./components/terms";
import AboutUs from "./components/about-us";

import Login from "./components/auth/login";
import Register from "./components/auth/register";

import ErrorPage from "./components/global/error-page";

const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:title" element={<Movie />} />

            <Route path="/bookings" element={<Bookings />} />
            <Route path="/about-us" element={<AboutUs />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/error" element={<ErrorPage />} />
            <Route path="/terms" element={<Terms />} />

            <Route path="" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route element={<ErrorPage />} />
        </Routes>
    );
};

export default routes;
