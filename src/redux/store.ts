import { createStore } from "redux";
import { counterReducer } from "./CounterReducer";

// BUat sotre global
export const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>;
