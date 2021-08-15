import { createSlice } from "@reduxjs/toolkit";

const initalTasks = {
  tasks: [
    { id: 1, title: "Task 1 to demo redux", complete: false },
    { id: 2, title: "Task 2 to demo redux", complete: true },
    { id: 3, title: "Task 3 to demo redux", complete: false },
    { id: 4, title: "Task 4 to demo redux", complete: true },
  ],
};

const taskSlice = createSlice({
  name: "tks",
  initialState: initalTasks,
  reducers: {
    update(state, action) {
      state.tasks = action.payload;
    },
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice.reducer;
