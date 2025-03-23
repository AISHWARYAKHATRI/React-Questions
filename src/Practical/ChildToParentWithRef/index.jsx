import { useRef } from "react";
import TextArea from "./TextArea";

const ChildToParentWithRef = () => {
  const valueRef = useRef("");
  return (
    <div>
      <TextArea valueRef={valueRef} />
      <button
        onClick={() => {
          console.log(valueRef.current);
        }}
      ></button>
    </div>
  );
};

export default ChildToParentWithRef;
