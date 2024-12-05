import { useRef } from "react";

export default function CounterRef(){
    const contadorRef =useRef(0);

    function incrementar(){
        contadorRef.current +=1;
        console.log(`Valor contador actual : ${contadorRef.current}`)
    }
    function alertaContador(){
        alert(`Valor contador actual: ${contadorRef.current}`)
    }

    
    return(
        <div>
            
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={alertaContador}>Mostrar valor</button>
        </div>
    );
}