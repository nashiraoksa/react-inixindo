import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";

export const CounterComponent = () => {
  //1. Use selector untuk membaca data dari state
  const count = useSelector((state: RootState) => state.value);

  //2. useDispatch untuk mengirim actopm
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          className="bg-red-500 p-2 px-4 rounded-md text-white"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 p-2 px-4 rounded-md text-white"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
