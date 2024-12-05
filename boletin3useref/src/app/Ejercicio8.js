import React, { useRef, useState } from "react";

export default function FormValidator() {
  const inputRef = useRef(null); 
  const [mensajeError, setMensajeError] = useState("");


  function validarEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar email
    return emailRegex.test(email);
  }
  
  function handleBlur(){
    const emailValue = inputRef.current.value; 
    if (!validarEmail(emailValue)) {
        setMensajeError("El correo electrónico no es válido.");
    } else {
        setMensajeError("Correo Valido"); 
    }
  }
 

  return (
    <div>
      <h1>Validador de Correo Electrónico</h1>
      <input
        ref={inputRef}
        type="email"
        placeholder="Introduce tu correo"
        onBlur={handleBlur}
      />
      {mensajeError && (<p>{mensajeError}</p>
      )}
    </div>
  );
}
