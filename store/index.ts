import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import masterReducer from "./reducers/masterReducer";
import thunk from "redux-thunk";

const initalState = {};
const middleware = [thunk];

export const store = createStore(
  masterReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
