import React from "react";
import "./SideBar.css";

const SideBar = ({ homePage }) => {
  return (
    <aside>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <button onClick={homePage}>Contacts</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
