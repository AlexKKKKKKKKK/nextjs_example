"use client"

import styles from "./botao.module.css";

export default function Botao({tipo, onClick, disabled, children}) {

    let estilo = styles.fill;
    if(tipo == "linha") {
        estilo = styles.outline;
    }
    if(tipo == "fantasma") {
        estilo = styles.ghost;
    }

    return(
        <button className={estilo} onClick={onClick} disabled={disabled}>{children}</button>
    )
}