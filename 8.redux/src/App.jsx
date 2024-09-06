import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/CounterSlice";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter);
  console.log(value);
  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
