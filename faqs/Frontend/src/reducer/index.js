import { combineReducers, createStore } from "redux";

import loginReducer from "../reducer/login/index";
import usersReducer from "../reducer/users/index";
const reducers = combineReducers({
  loginReducer,
  usersReducer,
});

const store = createStore(reducers);

export default store;





