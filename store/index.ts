import { createWrapper } from "next-redux-wrapper";
import masterReducer from "./reducers/masterReducer";
import { configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./tests";

const preloadedState = loadState();

export const store = configureStore({ reducer: masterReducer, preloadedState });

store.subscribe(() => {
  saveState(store.getState());
});

const makeStore = () => store;

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
