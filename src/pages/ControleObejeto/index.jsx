import { useState } from "react";

const ControleObjeto = () => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");

  const [marcaInserida, setMarcaInserida] = useState([]);

  const salvarDados = (e) => {
    setMarca(e.target.value);
    // setModelo(e.target.value);
    // setAno(e.target.value);
    // setCor(e.target.value);
  };

  const printDados = () => {
    if (marca.trim()) {
      setMarcaInserida([...marcaInserida, marca]);
      setMarca(""); // Limpar o input, após a tarefa ser adicionada.
    }
  };

  return (
    <>
      <div className="container m-0 py-0">
        <div className="card my-3 p-2">
          <h5 className="color-primary">Exercício 7: Controle de Objeto</h5>
          <p className="my-3">
            Crie um componente que armazene, através de um input, informações
            como: marca, modelo, ano e cor de um veículo. Após o usuário
            preencher todos os campos, imprima o resultado na tela.
          </p>

          <div className="mt-3 flex-column">
            <div className="p-2">
              <h6>Preencha as informações do veículo:</h6>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Marca</h6>
                <input
                  type="text"
                  className="ml-3"
                  onChange={salvarDados}
                  value={marca}
                />
              </div>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Modelo</h6>
                <input
                  type="text"
                  className="ml-3"
                  onChange={salvarDados}
                  value={modelo}
                />
              </div>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Ano</h6>
                <input
                  type="text"
                  className="ml-3"
                  onChange={salvarDados}
                  value={ano}
                />
              </div>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Cor</h6>
                <input
                  type="text"
                  className="ml-3"
                  onChange={salvarDados}
                  value={cor}
                />
              </div>

              <button className="btn mt-3" onClick={printDados}>
                Salvar
              </button>
            </div>

            <div className="p-2">
              <h6>Informações do veículo:</h6>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Marca:</h6>
                {marcaInserida.map((item, index) => (
                  <h6 className="color-green ml-1" key={index}>
                    {item}
                  </h6>
                ))}
              </div>

              <div className="flex-start-row mt-3">
                <h6 className="h7">Modelo</h6>
                <input type="text" className="ml-3" />
              </div>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Ano</h6>
                <input type="text" className="ml-3" />
              </div>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Cor</h6>
                <input type="text" className="ml-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ControleObjeto;
