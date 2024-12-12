import { createSlice } from "@reduxjs/toolkit";

export const premiseSlice = createSlice({
  name: "premises",
  initialState: {
    premise: null,
  },

  reducers: {
    setPremise: (state, action) => {
      state.premise = action.payload;
    },
  },
});

export const { setPremise } = premiseSlice.actions;
