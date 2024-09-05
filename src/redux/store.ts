import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import Urls from "./Urls";
import { Env } from "@/lib/Env";
import { RootReducer } from "./reducers";

export const axiosClient = axios.create({
    baseURL: Urls.baseUrl,
    responseType: "json",
});

export const makeStore = () => {
    const store = configureStore({
        reducer: RootReducer,
        devTools: Env.isReduxLogger(),
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        axios: { ...axiosClient },
                    },
                },
                serializableCheck: false,
            }),
    });

    return store;
};

export const reduxWrapper = createWrapper(makeStore, {
    debug: Env.isReduxLogger(),
});

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
