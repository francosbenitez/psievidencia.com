import counter from "../counter/reducer";
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

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

export default masterReducer;
