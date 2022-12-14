import { combineReducers } from "redux";
import {contactReducer} from "./contact"
import { editReducer } from "./Edit";

export const rootReducer = combineReducers({contactReducer , editReducer})