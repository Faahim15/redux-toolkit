import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const countersSlice = createSlice({
  name: "counters", // folder er name onujai e name dewa convention
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export default countersSlice.reducer;

export const { increment, decrement } = countersSlice.actions;
