import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Exercicio1 from "./componentes/Exercicio1";
import Exercicio2teste from "./componentes/Exercicio2";
import Atividade3 from "./componentes/Exercicio3";
import Exercicio15 from "./componentes/Exercicio1.5";
import Exercicio4 from "./componentes/Exercicio4";
import Exercicio5 from "./componentes/Exercicio5";
import Exercicio6 from "./componentes/Exercicio6";
import Exercicioteste7 from "./componentes/Exercicioteste7";

function App() {
  return (
    <div>
      <Exercicio1 />
      <Exercicio15 />
      <Exercicio2teste />
      <Atividade3 />
      <Exercicio4 />
      <Exercicio5 />
      <Exercicio6 />
      <Exercicioteste7 />
    </div>
  );
}

export default App;
