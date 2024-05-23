import { useState } from "react";

const Temporizador = () => {
  return (
    <>
      <div className="container m-0 py-0">
        <div className="card my-3 p-2">
          <h5 className="color-primary">Exercício 7: Temporizador</h5>
          <p className="my-3">
            Crie um componente que exiba um temporizador. Deve haver um botão
            "Iniciar", um botão "Pausar" e um botão "Zerar". O temporizador deve
            começar a contar quando "Iniciar" for clicado, pausar quando
            "Pausar" for clicado, e resetar para zero quando "Zerar" for
            clicado.
          </p>

          <div className="mt-3"></div>
        </div>
      </div>
    </>
  );
};
export default Temporizador;
