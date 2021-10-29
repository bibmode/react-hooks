import { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  const handleChange = (event) => {
    let newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input
        id="user-input"
        onChange={handleChange}
        type="text"
        placeholder="enter something..."
      />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
