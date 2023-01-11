import { combineReducers } from "redux";
import { counterRoucer } from "./counter.reducer";

export const rootReducer=combineReducers({
    counterRoucer,
})