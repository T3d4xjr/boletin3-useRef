import React, { useRef, useState } from "react";

export default function ColorSlider() {
  const containerRef = useRef(null); 
  const [redValue, setRedValue] = useState(100);

  function cambiarSlider(event){
    const value = event.target.value; 
    setRedValue(value);
    if (containerRef.current) {
      
      containerRef.current.style.backgroundColor = `rgb(${value}, 100, 100)`;
    }

  }
  return (
    <div>
      <h1>Color Slider</h1>
      <p>Valor del canal rojo: {redValue}</p>
      <input
        type="range"
        min="0"
        max="255"
        value={redValue}
        onChange={cambiarSlider}
      />
      <div
        ref={containerRef}
        style={{
          width: "300px",
          height: "150px",
          backgroundColor: `rgb(${redValue}, 100, 100)`,
        }}
      ></div>
    </div>
  );
}
