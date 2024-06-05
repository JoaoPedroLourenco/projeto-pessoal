import React from "react";
import "./SideBar.css";

const SideBar = ({
  homePage,
  contactsPage,
  aboutPage,
  loginPage,
  cadastroPage,
}) => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <button onClick={homePage}>Home</button>
          </li>
          <li>
            <button onClick={aboutPage}>About</button>
          </li>
          <li>
            <button onClick={contactsPage}>Contacts</button>
          </li>
        </ul>
      </nav>
      <div className="login">
        <button onClick={loginPage}>Login</button>
        <button onClick={cadastroPage}>Cadastro</button>
      </div>
    </aside>
  );
};

export default SideBar;
