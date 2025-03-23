import useCounter from "./useCounter";

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
