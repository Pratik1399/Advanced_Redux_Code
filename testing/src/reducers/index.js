import { combineReducers } from "redux";
import commentsReducer from "reducer/comments";

export default combineReducers({
  comments: commentsReducer
});
