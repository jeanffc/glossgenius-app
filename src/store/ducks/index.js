import { combineReducers } from "redux";
import candidates from "./candidates";
import dialog from "./dialog";

const rootReducer = combineReducers({
  candidates,
  dialog
});

export default rootReducer;
