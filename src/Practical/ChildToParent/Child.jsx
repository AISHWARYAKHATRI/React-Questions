const Child = ({ onClick }) => {
  const handleClick = () => {
    onClick("test");
  };

  return <button onClick={handleClick}>Child</button>;
};

export default Child;
