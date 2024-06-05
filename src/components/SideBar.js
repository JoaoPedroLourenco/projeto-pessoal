import React from "react";
import "./SideBar.css";

const SideBar = ({ homePage, outraPage }) => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <button onClick={homePage}>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button onClick={outraPage}>Contacts</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
