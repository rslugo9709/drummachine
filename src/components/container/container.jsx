import React from "react";
import style from "./container.module.css";
import { useState, useEffect } from "react";
import Keypad from "../keypad/keypad"


function Container(){
    const [pressedKey, setPressedKey] = useState("Press a key!");
    const [activo, setActivo] = useState(null)
    useEffect(() => {
        const handleKeyPress = (event) => {
          const key = event.key.toUpperCase(); // Convert the pressed key to uppercase
          setActivo(key);
          
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);


    return(
        <div className={style.contenedor}>
            <h1 className={style.titulo}>Drum machine</h1>
            
            <Keypad activo={activo} presionar={setPressedKey}/>

            <p className={style.cosa}>{pressedKey}</p>
            
        </div>
    )
}

export default Container;





