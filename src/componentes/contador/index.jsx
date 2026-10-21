"use client"
import { useState } from "react";
import estilos from './contador.module.css';
import Botao from "../botao/botao";

export default function Contador({valorInicial, valorMaximo}) {
  const [contador, mudarContador] = useState(valorInicial);

  function somar() {
    if(contador >= valorMaximo) {
      return;
    } 
    mudarContador(contador+1);
  }

  function subtrair() {
    if(contador <= 0) return;
    mudarContador(contador-1);
  }

  let estilo = "";
  if(contador >= valorMaximo) {
    estilo = estilos.maximo;
  }
  if(contador <= 0) {
    estilo = estilos.minimo;
  }

  return (
    <div className={`${estilos.card} ${estilo}`}>
      <p className={estilos.valor}>Contador: {contador}</p>
      <div className={estilos.acoes}>
        <Botao onClick={somar} tipo="linha" disabled={contador >= valorMaximo} >+</Botao>
        <Botao onClick={subtrair} tipo="fantasma" disabled={contador <= 0} >-</Botao>
      </div>
    </div>
  )
}