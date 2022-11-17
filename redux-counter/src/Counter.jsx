import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "./counter-slice";

function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(incremented());
  const handleDecrement = () => dispatch(decremented());

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default Counter;
