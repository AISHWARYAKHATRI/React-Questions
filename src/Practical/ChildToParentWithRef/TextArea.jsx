const TextArea = ({ valueRef }) => {
  return (
    <div>
      <textarea
        onChange={(e) => {
          valueRef.current = e.target.value;
        }}
      />
    </div>
  );
};

export default TextArea;
