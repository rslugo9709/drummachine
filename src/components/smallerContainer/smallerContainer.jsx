import React from "react";
import style from "./smaller.module.css";

import Keypad from "../keypad/keypad.jsx";
import Controllers from "../controllers/controllers.jsx";

function Smaller(){

    return(
        <div className={style.container}>
            <Keypad />
            <Controllers />

        </div>
    )
}

export default Smaller;