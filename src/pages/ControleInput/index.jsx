import { useState } from "react";

const ConstroleInput = () => {
  const [textoInput, setTextoInput] = useState("");

  const atualizarParagrafo = (e) => {
    setTextoInput(e.target.value);
  };

  return (
    <>
      <div className="container m-0 py-0">
        <div className="card my-3 p-2">
          <h5 className="color-primary">Exercício 6: Controle de Input</h5>
          <p className="my-3">
            Crie um componente com um campo de entrada de texto e um parágrafo.
            O texto digitado no campo de entrada deve ser refletido em tempo
            real no parágrafo abaixo dele.
          </p>

          <div className="mt-3">
            <textarea
              rows="2"
              onChange={atualizarParagrafo}
              value={textoInput}
            ></textarea>
            <p className="mt-3 pl-1">👉 {textoInput}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConstroleInput;
