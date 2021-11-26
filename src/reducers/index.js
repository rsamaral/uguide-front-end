import { combineReducers } from "redux";
import tours from "./tour";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  tours,
  auth,
  message
})