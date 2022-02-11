import { combineReducers } from "redux";
import users from "./users-reducer";
import movies from "./movies-reducer";
import auth from "./auth-reducer";

const reducers = combineReducers({
    auth,
    users,
    movies,
});

export default reducers;
