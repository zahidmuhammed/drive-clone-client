import { combineReducers } from "@reduxjs/toolkit";
import filesSlice from "./slices/filesSlice";

const AllReducers = {
    filesReducer: filesSlice,
};

const RootReducer = combineReducers(AllReducers);

const whitelistReducers: string[] = ["filesReducer"];

export { RootReducer, whitelistReducers };
