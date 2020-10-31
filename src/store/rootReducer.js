import { combineReducers } from "redux";
import formReducer from "./form/reducer";
import userReducer from "./user/reducer";
import marriageFormReducer from "./marriage-form/reducer";

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  marriageForm: marriageFormReducer,
});

export default rootReducer;
