import counter from "../counter/reducer";
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import userReducer from "../user/userSlice";

const combinedReducer = combineReducers({
  counter,
  userReducer,
});

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      user: userReducer,
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
