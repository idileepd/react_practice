import { combineReducers } from "redux";

const logsList = (logs = [], action) => {
  if (action.type === "ADD_LOG") {
    return [...logs, action.payload];
  }
  return logs;
};

export default combineReducers({
  logsList,
});
