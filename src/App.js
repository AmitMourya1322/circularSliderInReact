import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { GoDashboard } from "react-icons/go";
import "./App.css";
const CircularSliderExample = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="app">
      <CircularSlider
        width={200}
        height={200}
        min={0}
        max={20}
        label="Mechanica Coder"
        dataIndex={value}
        onChange={(value) => setValue(value)}
      >
        <GoDashboard x="9" y="9" width="50px" height="50px" />
      </CircularSlider>
    </div>
  );
};

export default CircularSliderExample;
