import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isAuthenticate: false,
  personelList: [],
};

export const counterSlice = createSlice({
  name: `counter`,
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
