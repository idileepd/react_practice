import { combineReducers } from "redux";

import { createStore } from "redux";

const logsList = (logs = [], action) => {
  if (action.type === "ADD_LOG") {
    return [...logs, action.payload];
  }
  return logs;
};

const reducers = combineReducers({
  logsList,
});

export const store = createStore(reducers);
