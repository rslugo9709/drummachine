import React from "react";
import style from "./key.module.css";



function Key({url, valor, desc, presionar}){
    const audio = new Audio(url);
    const handleClick = (buttonKey) => {
        // Perform the action associated with the buttonKey
        //console.log(`Button "${buttonKey}" was clicked.`);
        presionar(buttonKey);
        audio.play();
      };
    return(
        <div className={style.key} onClick={() => {handleClick(desc)}}>
            {valor}
        </div>
    )
}

export default Key;