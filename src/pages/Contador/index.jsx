import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const menosUm = () => {
    setContador(contador - 1);
  };

  const maisUm = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <div className="container m-0 py-0">
        <div className="card my-3 p-2">
          <h5 className="color-primary">Exercício 1: Contador Simples</h5>
          <p className="my-3">
            Crie um componente que exiba um número inicial (0) e dois botões:
            "Incrementar" e "Decrementar". Ao clicar nos botões, o número deve
            aumentar ou diminuir em 1, respectivamente.
          </p>

          <div className="mt-3">
            <h5>Contador: {contador}</h5>
            <div className="w-25 mt-3 p-0">
              <button type="button" className="btn mr-3" onClick={menosUm}>
                -
              </button>
              <button type="button" className="btn" onClick={maisUm}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contador;
