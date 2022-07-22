import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import userReducer from "../user/userSlice";

const combinedReducer = combineReducers({
  userReducer,
});

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      user: userReducer,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default masterReducer;
