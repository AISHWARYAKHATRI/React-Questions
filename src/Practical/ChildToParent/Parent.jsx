import Child from "./Child";

const Parent = () => {
  const handleClick = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div>Parent</div>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;
