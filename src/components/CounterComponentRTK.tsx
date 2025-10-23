import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { increment, decrement } from "../redux/CounterSlice";

export const CounterComponentRTK = () => {
  //1. Use selector untuk membaca data dari state
  const count = useSelector((state: RootState) => state.value);

  //2. useDispatch untuk mengirim actopm
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        className="bg-red-500 p-2 px-4 rounded-md text-white"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-blue-500 p-2 px-4 rounded-md text-white"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
};
