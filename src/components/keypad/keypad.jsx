import React from "react";
import style from "./keypad.module.css";
import Key from "../key/key";


function Keypad({presionar}){
    
    const q = {description: "Heater 1",url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" };
    const w = {description: "Heater 2",url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" };
    const e = {description: "Heater 3",url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" };
    const a = {description: "Heater 4",url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" };
    const s = {description: "Clap",url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" };
    const d = {description: "Open HH",url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" };
    const z = {description: "Kick n' Hat",url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" };
    const x = {description: "Kick",url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" };
    const c = {description: "Closed HH",url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" };
    return(
        <div className={style.keypad}>
            <div className={style.row}>
            <Key presionar={presionar} valor="Q" desc={q.description} url={q.url} />
            <Key presionar={presionar} valor="W" desc={w.description} url={w.url} />
            <Key presionar={presionar} valor="E" desc={e.description} url={e.url} />
            </div>
            <div className={style.row}>
            <Key presionar={presionar} valor="A" desc={a.description} url={a.url} />
            <Key presionar={presionar} valor="S" desc={s.description} url={s.url} />
            <Key presionar={presionar} valor="D" desc={d.description} url={d.url} />
            </div>
            <div className={style.row}>
            <Key presionar={presionar} valor="Z" desc={z.description} url={z.url} />
            <Key presionar={presionar} valor="X" desc={x.description} url={x.url} />
            <Key presionar={presionar} valor="C" desc={c.description} url={c.url} />
            </div>
        </div>
    )
}

export default Keypad;