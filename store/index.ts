import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import counter from "./counter/reducer";

const combinedReducer = combineReducers({
  counter,
});

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);
