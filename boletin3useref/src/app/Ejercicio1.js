import {useRef} from "react";
export default function FocusInput(){
    const inputRef = useRef(null);
    function enfocarInput() {
        inputRef.current.focus();
    }
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Escribe algo" />
            <button onClick={enfocarInput}>Enfocar el input </button>
        </div>
    );
}