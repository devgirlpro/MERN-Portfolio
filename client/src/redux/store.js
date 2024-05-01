import rootSlice from "./rootSlice";
import { combineReducer } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducer({
    root: rootSlice
});


const store = configureStore({
    reducer,
})