import Contador from "./pages/Contador";
import EsconderTexto from "./pages/EsconderTexto";
import ListaDeTarefas from "./pages/ListaDeTarefas";
import MudarCor from "./pages/MudarCor";
import ValidarForm from "./pages/ValidarForm";

function App() {
  return (
    <>
      <h2 className="ml-3 mt-3">Exercícios - Eventos em ReactJS</h2>
      <Contador />
      <EsconderTexto />
      <ListaDeTarefas />
      <MudarCor />
      <ValidarForm />
    </>
  );
}

export default App;
