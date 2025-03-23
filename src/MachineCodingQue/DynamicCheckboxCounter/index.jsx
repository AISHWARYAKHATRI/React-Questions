import { useState } from "react";

const DynamicCheckboxCounter = () => {
  const [checkBoxes, setCheckBoxes] = useState([
    {
      id: 1,
      name: "Checkbox 1",
      checked: false,
    },
    {
      id: 2,
      name: "Checkbox 2",
      checked: false,
    },
    {
      id: 3,
      name: "Checkbox 3",
      checked: false,
    },
    {
      id: 4,
      name: "Checkbox 4",
      checked: false,
    },
  ]);

  const handleCheckboxes = () => {
    setCheckBoxes((prev) => {
      return prev?.map((checkbox) => ({ ...checkbox, checked: true }));
    });
  };

  const handleCheckbox = (e) => {
    setCheckBoxes((prev) => {
      const array = [...prev];

      const selectedCBIdcx = prev?.findIndex(
        (checkbox) => checkbox.id == e.target.id
      );

      array[selectedCBIdcx] = {
        ...array?.[selectedCBIdcx],
        checked: !array[selectedCBIdcx]?.checked,
      };

      return array;
    });
  };

  return (
    <div>
      {checkBoxes?.map((checkbox) => (
        <div key={checkbox.id}>
          <label htmlFor={checkbox.id}>{checkbox.name}</label>
          <input
            id={checkbox.id}
            type="checkbox"
            checked={checkbox.checked}
            onChange={handleCheckbox}
          />
        </div>
      ))}
      <button
        onClick={handleCheckboxes}
        disabled={checkBoxes.every((checkbox) => checkbox.checked)}
        style={{ marginTop: "15px" }}
      >
        Select All
      </button>
      <h3>Selected Checkboxes</h3>
      {checkBoxes.map((checkbox) => {
        if (checkbox.checked) {
          return <div key={checkbox.id}>{checkbox.name}</div>;
        }
      })}
    </div>
  );
};

export default DynamicCheckboxCounter;
