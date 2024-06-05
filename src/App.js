import "./App.css";
import MiddlePart from "./components/MiddlePart";
import SideBar from "./components/SideBar";
import Novidades from "./components/Novidades";
import { useState } from "react";
import OutraPage from "./components/OutraPage";
import AboutPage from "./components/AboutPage";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

const pages = [
  { id: 1, page: "home" },
  { id: 2, page: "about" },
  { id: 3, page: "contacts" },
  { id: 4, page: "login" },
  { id: 5, page: "cadastro" },
];

function App() {
  const [pagina, setPagina] = useState(pages[0].page);

  const homePage = () => {
    setPagina(pages[0].page);
  };

  const aboutPage = () => {
    setPagina(pages[1].page);
  };

  const contactsPage = () => {
    setPagina(pages[2].page);
  };

  const loginPage = () => {
    setPagina(pages[3].page);
  };

  const cadastroPage = () => {
    setPagina(pages[4].page);
  };

  return (
    <div className="App">
      <SideBar
        homePage={homePage}
        contactsPage={contactsPage}
        aboutPage={aboutPage}
        loginPage={loginPage}
        cadastroPage={cadastroPage}
      />
      {pagina === "home" && (
        <MiddlePart
          textoCard="Lorem Ipsum"
          pgCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi eos voluptatem dolorem delectus magni vero iure voluptate vitae, ipsa dolor asperiores mollitia unde beatae dolorum nulla, sequi dicta cum"
        />
      )}

      {pagina === "about" && <AboutPage />}

      {pagina === "contacts" && <OutraPage />}

      {pagina === "login" && <Login />}

      {pagina === "cadastro" && <Cadastro />}

      <Novidades
        cardTexto="Lorem Ipsum"
        descCard="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
}

export default App;
