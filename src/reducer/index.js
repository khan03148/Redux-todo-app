// we use combine reducer to combine reducer reducer are just functions with switch statements

import { combineReducers } from "redux";
import todos from "./todos";

const allReducers = combineReducers({
  todos: todos,
});

//we export default so we can import using any name
export default allReducers;
