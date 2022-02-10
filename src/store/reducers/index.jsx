import { combineReducers } from "redux";
import users from "./users-reducer";
import movies from "./movies-reducer";

const reducers = combineReducers({
    users,
    movies,
});

export default reducers;
