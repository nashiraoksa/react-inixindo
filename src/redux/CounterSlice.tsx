import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

//definisikan initial state
const initialState: CounterState = {
  value: 0,
};

// Slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    //Contoh action payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

//Export actions dan reducer
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
