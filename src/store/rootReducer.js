import { combineReducers } from "redux";
import formReducer from "./form/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
});

export default rootReducer;
