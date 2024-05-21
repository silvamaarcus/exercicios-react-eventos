import { useState } from "react";

const ListaDeTarefas = () => {
  // 'input': armazena o texto atual digitado no campo de entrada.
  const [input, setInput] = useState("");
  // 'tarefa': armazena a lista de tarefas adicionadas.
  const [tarefa, setTarefa] = useState([]);

  // Função p/ atualizar o estado 'input', sempre que o valor do campo de entrada muda. Aqui usamos o evento onChange, pois trata de uma mudança de dados.
  const pegarValorInput = (e) => {
    setInput(e.target.value);
  };

  // Adiciona o valor de 'tarefa' à lista de tarefas, se 'tarefa' não estiver vazio (após remover espaços em branco).
  const addTarefa = () => {
    if (input.trim()) {
      setTarefa([...tarefa, input]);
      setInput(""); // Limpar o input, após a tarefa ser adicionada.
    }
  };

  return (
    <>
      <div className="container m-0 py-0">
        <div className="card my-3 p-2">
          <h5 className="color-primary">Exercício 3: Lista de Tarefas</h5>
          <p className="my-3">
            Crie um componente que permita ao usuário adicionar itens a uma
            lista de tarefas. Deve haver um campo de entrada de texto e um botão
            "Adicionar". Ao clicar no botão, o texto digitado deve ser
            adicionado a uma lista exibida abaixo do campo de entrada.
          </p>

          <div className="mt-3">
            <h5>Nova tarefa:</h5>
            <div className="flex-start-row mt-3">
              <input
                type="text"
                className="w-50"
                value={input}
                onChange={pegarValorInput}
                placeholder="Digite uma nova tarefa..."
              />
              <button className="btn ml-3" onClick={addTarefa}>
                Adicionar
              </button>
            </div>
            <ul>
              {tarefa.map((item, index) => (
                <li className="my-1 color-green" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListaDeTarefas;
