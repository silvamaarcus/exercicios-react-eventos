import { useState } from "react";

const ControleObjeto = () => {
  const [veiculo, setVeiculo] = useState({
    marca: "",
    modelo: "",
    ano: "",
    cor: "",
  });
  const [veiculos, setVeiculos] = useState([]);

  // Atualizar o estado veiculo sempre que um campo de input é alterado.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVeiculo({ ...veiculo, [name]: value });
  };

  // Verificar se todos os campos estão preenchidos e, se estiverem, adiciona o objeto 'veiculo' ao array 'veiculos', após isso, limpar os inputs.
  const printDados = () => {
    const { marca, modelo, ano, cor } = veiculo;
    if (marca.trim() && modelo.trim() && ano.trim() && cor.trim()) {
      setVeiculos([...veiculos, veiculo]);
      // Limpar os inputs após a tarefa ser adicionada.
      setVeiculo({ marca: "", modelo: "", ano: "", cor: "" });
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
                  name="marca"
                  onChange={handleChange}
                  value={veiculo.marca}
                />
              </div>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Modelo</h6>
                <input
                  type="text"
                  className="ml-3"
                  name="modelo"
                  onChange={handleChange}
                  value={veiculo.modelo}
                />
              </div>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Ano</h6>
                <input
                  type="text"
                  className="ml-3"
                  name="ano"
                  onChange={handleChange}
                  value={veiculo.ano}
                />
              </div>
              <div className="flex-start-row mt-3">
                <h6 className="h7">Cor</h6>
                <input
                  type="text"
                  className="ml-3"
                  name="cor"
                  onChange={handleChange}
                  value={veiculo.cor}
                />
              </div>

              <button className="btn mt-3" onClick={printDados}>
                Salvar
              </button>
            </div>

            <div className="p-2">
              <h6>Informações do veículo:</h6>
              {veiculos.map((item, index) => (
                <div key={index} className="mt-3">
                  <div className="flex-start-row">
                    <h6 className="h7">Marca:</h6>
                    <h6 className="color-green ml-1">{item.marca}</h6>
                  </div>
                  <div className="flex-start-row">
                    <h6 className="h7">Modelo:</h6>
                    <h6 className="color-green ml-1">{item.modelo}</h6>
                  </div>
                  <div className="flex-start-row">
                    <h6 className="h7">Ano:</h6>
                    <h6 className="color-green ml-1">{item.ano}</h6>
                  </div>
                  <div className="flex-start-row">
                    <h6 className="h7">Cor:</h6>
                    <h6 className="color-green ml-1">{item.cor}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControleObjeto;
