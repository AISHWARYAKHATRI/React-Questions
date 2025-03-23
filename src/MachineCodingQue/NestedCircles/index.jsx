import { useState } from "react";

const NestedCircles = () => {
  const [circles, setCircles] = useState(10);

  const renderCircles = (count) => {
    if (count >= 1)
      return (
        <div
          className="circle"
          key={count}
          style={{
            width: `${20 * count}px`,
            height: `${20 * count}px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderCircles(count - 1)}
        </div>
      );
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          if (e.target.value <= 70) setCircles(e.target.value);
        }}
      />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderCircles(circles)}
      </div>
    </div>
  );
};

export default NestedCircles;
