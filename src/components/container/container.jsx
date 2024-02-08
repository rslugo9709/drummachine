import React from "react";
import style from "./container.module.css";

import Smaller from "../smallerContainer/smallerContainer";


function Container(){
    
    
    return(
        <div className={style.contenedor}>
            <h1 className={style.titulo}>Drum machine</h1>
            <Smaller />
            
        </div>
    )
}

export default Container;





