import React, { useState, useRef, useEffect } from "react";

export default function Timer(){
    const[contador,setContador]=useState(0);
    const intervalRef=useRef(null);

    function iniciarTemporizador(){
        if(intervalRef.current ===null){
            intervalRef.current =setInterval(()=>{
                setContador((prev) => prev+1)
                
            })
            
        }
    }
    function detenerTemporizador(){
        if(intervalRef.current !==null){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }
    useEffect (() =>{
        return detenerTemporizador();
    },[])


    return(
        <div>
        <p>Contador: {contador}</p>
        <button onClick={iniciarTemporizador}>Iniciar</button>
        <button onClick={detenerTemporizador}>Detener</button>   
        </div>
    );
}