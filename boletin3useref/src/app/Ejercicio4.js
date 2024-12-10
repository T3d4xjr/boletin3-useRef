import React, { useRef, useState } from "react";

export default function RenderCounter() {
  const renderCountRef = useRef(1);
  const [state, setState] = useState(0); 

  

  return (
    <div>
      <h1>Contador de Renders</h1>
      <p>Estado {state}</p>
      <p>El componente se ha renderizado {renderCountRef.current} veces.</p>
      <button onClick={() => {
        renderCountRef.current++;
        setState((prev) => prev + 1)}}>Re-renderizar</button>
    </div>
  );
}
