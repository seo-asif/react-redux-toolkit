import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incriment,
  decrement,
  reset,
  incrimentByAmount,
  decrementByAmount,
} from "./counterSlice";

import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  console.log(incrementAmount);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(incriment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrimentByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}> Reset</button>
      </div>
    </section>
  );
};

export default Counter;
