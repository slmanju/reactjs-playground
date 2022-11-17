import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counter/action";
import { selectCount } from "../store/counter/selector";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export { Counter };
