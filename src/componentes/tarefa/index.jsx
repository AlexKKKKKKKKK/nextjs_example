"use client"
import estilos from "./tarefa.module.css";
import Botao from "../botao/botao";

export default function Tarefa({ titulo, concluida, onAlternar, onRemover }) {
  return (
    <article className={`${estilos.card} ${concluida ? estilos.concluida : ""}`}>
      <label className={estilos.titulo}>
        <input type="checkbox" checked={concluida} onChange={onAlternar} />
        <span>{titulo}</span>
      </label>
      <Botao tipo="fantasma" onClick={onRemover}>X</Botao>
    </article>
  );
}
