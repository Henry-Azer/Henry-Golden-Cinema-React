import { combineReducers } from "redux";
import reviews from "./reviews-reducer";
import movies from "./movies-reducer";
import users from "./users-reducer";
import auth from "./auth-reducer";

const reducers = combineReducers({
    auth,
    users,
    movies,
    reviews,
});

export default reducers;
