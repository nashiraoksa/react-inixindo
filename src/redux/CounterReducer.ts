//1. Definisikan bentuk state
interface CounterState {
  value: number;
}

//2. Tentukan initial state
const initialState: CounterState = {
  value: 0,
};

//3. Definisikan action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//4 Buat Reducer Function
export const counterReducer = (state = initialState, action: { type: string }): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
