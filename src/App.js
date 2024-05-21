import "./App.css";
import MiddlePart from "./components/MiddlePart";
import SideBar from "./components/SideBar";
import Novidades from "./components/Novidades";
import { useState } from "react";
import OutraPage from "./components/OutraPage";

const pages = [
  { id: 1, page: "home" },
  { id: 2, page: "outra" },
];

function App() {
  const [pagina, setPagina] = useState(pages[0].page);

  const homePage = () => {
    setPagina(pages[1].page);
  };

  return (
    <div className="App">
      <SideBar />
      {pagina === "home" && (
        <MiddlePart
          homePage={homePage}
          textoCard="Lorem Ipsum"
          pgCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi eos voluptatem dolorem delectus magni vero iure voluptate vitae, ipsa dolor asperiores mollitia unde beatae dolorum nulla, sequi dicta cum"
        />
      )}

      {pagina === "outra" && <OutraPage />}

      <Novidades
        cardTexto="Lorem Ipsum"
        descCard="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
}

export default App;
