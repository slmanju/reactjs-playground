import { createSlice } from "@reduxjs/toolkit";

const counterState = {
  count: 10,
};

const increment = (state) => {
  return {
    ...state,
    count: state.count + 1,
  };
};

const decrement = (state) => {
  return {
    ...state,
    count: state.count - 1,
  };
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterState,
  reducers: {
    incremented: increment,
    decremented: decrement,
  },
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;
