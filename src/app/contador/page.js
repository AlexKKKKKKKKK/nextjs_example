import Contador from "../../componentes/contador";

export default function PaginaContador() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Contador</h1>
      <Contador valorInicial={0} valorMaximo={10} />
      <Contador valorInicial={20} valorMaximo={40} />
    </main>
  );
}
