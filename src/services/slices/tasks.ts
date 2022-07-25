import { createSlice } from "@reduxjs/toolkit";
import Task from "../../classes/task";
import { initTasks } from "../../hard-code-tasks"; //todo: remove

interface ITasksState {
  tasks: Array<Task>;
}

const initialState: ITasksState = {
  tasks: initTasks(), //todo: change
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {

  }
})

export const tasksReducer = tasksSlice.reducer;