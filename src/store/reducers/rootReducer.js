import {combineReducers} from "redux";
import reducerCars from "./cars";
import reducerApp from "./app";

export default combineReducers({
    cars: reducerCars,
    app: reducerApp
})