"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import estilos from "./menu.module.css";

const links = [
  { href: "/", texto: "Início" },
  { href: "/contador", texto: "Contador" },
  { href: "/tarefas", texto: "Tarefas" },
];

export default function Menu() {
  const caminho = usePathname();

  return (
    <nav className={estilos.menu}>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={`${estilos.link} ${caminho === l.href ? estilos.ativo : ""}`}
        >
          {l.texto}
        </Link>
      ))}
    </nav>
  );
}
