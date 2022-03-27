import { combineReducers } from "redux";
import reviews from "./reviews-reducer";
import tickets from "./tickets-reducer";
import movies from "./movies-reducer";
import users from "./users-reducer";
import auth from "./auth-reducer";
import shows from "./shows-reducer";

const reducers = combineReducers({
    auth,
    users,
    shows,
    movies,
    tickets,
    reviews,
});

export default reducers;
