import { combineReducers } from "redux";
import courses from "./courses";
import authReducer from "./../../containers/AdminTemplate/Auth/modules/reducer";
import addUserReducer from "./../../containers/AdminTemplate/AddUser/modules/reducer";

const reducers = combineReducers({
  courses,
  authReducer,
  addUserReducer,
});

export default reducers;
