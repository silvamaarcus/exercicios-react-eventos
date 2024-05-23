import Contador from "./pages/Contador";
import EsconderTexto from "./pages/EsconderTexto";
import ListaDeTarefas from "./pages/ListaDeTarefas";
import MudarCor from "./pages/MudarCor";
import ValidarForm from "./pages/ValidarForm";
import ConstroleInput from "./pages/ControleInput";
import ControleObjeto from "./pages/ControleObejeto";

import Temporizador from "./pages/Temporizador";

function App() {
  return (
    <div className="container p-0">
      <h4 className="ml-3 mt-3">
        Exercícios - Eventos c/ Hooks (useState) em ReactJS
      </h4>
      <Contador />
      <EsconderTexto />
      <ListaDeTarefas />
      <MudarCor />
      <ValidarForm />
      <ConstroleInput />
      <ControleObjeto />
      <h4 className="ml-3 mt-3">
        Exercícios - Eventos c/ Hooks (useState, useEffect) em ReactJS
      </h4>
      <Temporizador />
    </div>
  );
}

export default App;
