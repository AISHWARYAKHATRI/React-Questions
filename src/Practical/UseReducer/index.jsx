import { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInc = () => {
    dispatch({ type: "increment" });
  };

  const handleDec = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      <div>{state.count}</div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </>
  );
};

export default Counter;
