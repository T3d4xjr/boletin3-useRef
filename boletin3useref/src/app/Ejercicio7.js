import React, { useState, useRef } from "react";

export default function TextEditor() {
  const [texto, setTexto] = useState(""); 
  const historyRef = useRef([]); 

  function handleChange(event){
    historyRef.current.push(texto);
    setTexto(event.target.value);
  }

  function retroceder (){
    if (historyRef.current.length > 0) {
        const textoAnterior = historyRef.current.pop();
        setTexto(textoAnterior);
      } else {
        alert("No hay más cambios en el historial.");
      }
  }
  return (
    <div>
      <h1>Editor de Texto con Historial</h1>
      <textarea
        value={texto}
        onChange={handleChange}
        placeholder="Escribe algo..."
      ></textarea>
      <div>
        <button onClick={retroceder} disabled={historyRef.current.length === 0}>
          Deshacer
        </button>
      </div>
      <p>Texto actual:{texto}</p>
      <p>Historial:{JSON.stringify(historyRef.current)}</p>
    </div>
  );
}
