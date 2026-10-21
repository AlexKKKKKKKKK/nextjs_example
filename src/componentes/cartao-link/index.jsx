import Link from "next/link";
import estilos from "./cartao-link.module.css";

export default function CartaoLink({ href, titulo, descricao }) {
  return (
    <Link href={href} className={estilos.card}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </Link>
  );
}
