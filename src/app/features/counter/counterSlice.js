import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incriment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrimentByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const {
  incriment,
  decrement,
  reset,
  incrimentByAmount,
  decrementByAmount,
} = counterSlice.actions;
export default counterSlice.reducer;
