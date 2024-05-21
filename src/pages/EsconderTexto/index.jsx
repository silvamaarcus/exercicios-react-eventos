import { useState } from "react";

const EsconderTexto = () => {
  const [esconder, setEsconder] = useState(false);

  const mostrarTexto = () => {
    // (!esconder) é um macete chamado Toggle. Ele add ou remove uma classe de acordo com clique.
    setEsconder(!esconder);
  };

  return (
    <>
      <div className="container m-0 py-0">
        <div className="card my-3 p-2">
          <h5 className="color-primary">Exercício 2: Mostrar/Ocultar Texto</h5>
          <p className="my-3">
            Crie um componente que exiba um parágrafo de texto e um botão com o
            rótulo "Mostrar/Ocultar". Quando o botão for clicado, o parágrafo de
            texto deve ser ocultado ou mostrado alternadamente.
          </p>

          <div className="mt-3">
            <button className="btn" onClick={mostrarTexto}>
              Mostrar/Ocultar
            </button>
            <p className={esconder ? "show-display mt-3 color-white" : "hidden-display"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              cupiditate perspiciatis ex porro. Ab, a nobis? Ipsum, deserunt
              aperiam. Soluta rem excepturi at saepe laboriosam velit
              consectetur officia, vero qui!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default EsconderTexto;
