import React from "react";

function Controls(props) {
  const { lineWidth, setLineWidth, color, setColor } = props;

  const handleLineWidthChange = (e) => {
    setLineWidth(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="controls">
      <label htmlFor="line-width">Line Width:</label>
      <input
        type="range"
        min="1"
        max="50"
        value={lineWidth}
        onChange={handleLineWidthChange}
        id="line-width"
      />

      <label htmlFor="color-picker">Color:</label>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        id="color-picker"
      />
    </div>
  );
}

export default Controls;
