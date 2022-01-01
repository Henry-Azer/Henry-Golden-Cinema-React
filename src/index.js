import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import reducers from "./store/reducers";

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "./styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
