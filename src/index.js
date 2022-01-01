import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "./styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById("root")
);
