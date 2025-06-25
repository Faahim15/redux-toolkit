"use client";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./feautures/counters/CountersSlice";

export default function Home() {
  const count = useSelector(
    (state: { counters: { value: number } }) => state.counters.value
  );
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold">Count: {count}</h2>
          <div className="flex gap-4">
            <button
              onClick={handleIncrement}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Increment
            </button>
            <button
              onClick={handleDecrement}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Decrement
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
