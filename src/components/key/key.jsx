import React from "react";
import style from "./key.module.css";



function Key({url, valor, desc}){
    const audio = new Audio(url);
    
    return(
        <div className={style.key} onClick={() => {audio.play()}}>
            {valor}
        </div>
    )
}

export default Key;