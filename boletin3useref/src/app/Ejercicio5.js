import { useState,useEffect,useRef } from "react";

export default function PreviousValue(){
    const [value,setValue]=useState(0);
    const prevValueRef= useRef();

    useEffect(() => {
        prevValueRef.current = value; // Guarda el valor actual como el previo
        }, [value]);
    function cambiarValor(){
        setValue(value + 1)

    }
    return(
        <div>
      <h2>Valor Actual: {value}</h2>
      <h2>Valor Anterior: {prevValueRef.current}</h2>
      <button onClick={cambiarValor}>Cambiar Valor</button>
    </div>
    )
}