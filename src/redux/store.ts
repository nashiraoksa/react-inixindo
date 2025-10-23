import counterReducer from "./CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

// BUat sotre global

// gunakan configureStore dari RTK
export const store = configureStore({
  reducer: counterReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

// import { createStore } from "redux";
// import { counterReducer } from "./CounterReducer";

// // BUat sotre global
// export const store = createStore(counterReducer);

// export type RootState = ReturnType<typeof store.getState>;
