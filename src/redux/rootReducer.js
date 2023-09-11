import { combineReducers } from "redux";
import counterReducer from "./Counter/counterReducer";
import { formReducer } from "./form/formReducer";

export const rootReducer = combineReducers({
    counter : counterReducer,
    form : formReducer
})