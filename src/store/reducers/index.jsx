import { combineReducers } from "redux";
import movies from "./movies_reducer";

const reducers = combineReducers({
    movies,
});

export default reducers;