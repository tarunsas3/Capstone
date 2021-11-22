import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    project: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    submitStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    submitSuccess: (state, action) => {
      state.isFetching = false;
      state.project = action.payload;
    },
    submitFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { submitStart, submitSuccess, submitFailure } =
  projectSlice.actions;

export default projectSlice.reducer;
