import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Exercicio1 from "./componentes/Exercicio1";
import Exercicio2teste from "./componentes/Exercicio2";
import Atividade3 from "./componentes/Exercicio3";
import Exercicio15 from "./componentes/Exercicio1.5";

function App() {
  return (
    <div>
      <Exercicio1 />
      <Exercicio15 />
      <Exercicio2teste />
      <Atividade3 />
    </div>
  );
}

export default App;
