import { useState } from "react";

const MudarCor = () => {
  const [cores] = useState(["green", "blue", "red", "orange", "navyblue"]);
  const [corAtualIndex, setCorAtualIndex] = useState("");

  const mudarCor = () => {
    // Usamos operador de módulo '%' para garantir que o índice volte ao início da lista quando atinge o final.
    const proximoIndex = (corAtualIndex + 1) % cores.length;
    setCorAtualIndex(proximoIndex);
  };

  return (
    <>
      <div className="container m-0 py-0">
        <div className="card my-3 p-2">
          <h5 className="color-primary">Exercício 4: Mudar Cor de Fundo</h5>
          <p className="my-3">
            Crie um componente que altere a cor de fundo de um div ao clicar em
            um botão. Você pode usar uma lista de cores predefinidas e, a cada
            clique, a cor deve mudar para a próxima da lista.
          </p>

          <div className="mt-3 flex-start-row">
            <button className="btn mr-3" onClick={mudarCor}>
              Alterar cor
            </button>
            <div
              className="new-color"
              style={{
                backgroundColor: cores[corAtualIndex],
                transition: ".3s ease",
              }}
            >
              <p className="uppercase color-white">essa é a nova cor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MudarCor;
