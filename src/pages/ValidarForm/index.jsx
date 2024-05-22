import { useState } from "react";

const ValidarForm = () => {
  const [nomeInput, setNomeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const conferirNomeInput = (e) => {
    setNomeInput(e.target.value);
  };

  const conferirEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const validarForm = () => {
    const emailValido = "@";
    if (
      nomeInput.length &
      emailInput.length &
      emailInput.includes(emailValido)
    ) {
      setNomeInput(alert("Sucesso!"));
      setNomeInput("");
      setEmailInput("");
    } else {
      alert("Preencha os campos corretamente!");
    }
  };

  return (
    <>
      <div className="container m-0 py-0">
        <div className="card my-3 p-2">
          <h5 className="color-primary">
            Exercício 5: Validação de Formulário
          </h5>
          <p className="my-3">
            Crie um componente de formulário com campos para "Nome" e "Email".
            Adicione um botão "Enviar". Ao clicar no botão, se qualquer um dos
            campos estiver vazio, exiba uma mensagem de erro abaixo do
            formulário. Se ambos os campos estiverem preenchidos, exiba uma
            mensagem de sucesso.
          </p>

          <div className="mt-3">
            <div className="flex-start-row">
              <h6>Nome:</h6>
              <input
                type="text"
                className="w-50 ml-3"
                value={nomeInput}
                onChange={conferirNomeInput}
              />
            </div>
            <div className="flex-start-row my-3">
              <h6>E-mail:</h6>
              <input
                type="email"
                className="w-50 ml-2"
                value={emailInput}
                onChange={conferirEmailInput}
              />
            </div>
            <button type="button" className="btn" onClick={validarForm}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ValidarForm;
