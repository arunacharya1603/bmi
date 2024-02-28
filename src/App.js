import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const output = useMemo(()=>{
    const calculateHeight = height/100;

    return(weight/(calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height])

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={handleWeightChange}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          min="140"
          max="220"
          type="range"
          onChange={handleHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
