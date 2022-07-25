import { combineReducers } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasks";

const rootReducer = combineReducers({
  tasks: tasksReducer,
})

export default rootReducer;