import React from "react";
import "./MiddlePart.css";

const MiddlePart = ({ textoCard, pgCard }) => {
  const h3Style = {
    fontSize: 18,
  };

  return (
    <div className="Container middle">
      <div className="title">
        <h1>Home Page</h1>
      </div>

      <div className="pageTexts">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          excepturi eos voluptatem dolorem delectus magni vero iure voluptate
          vitae, ipsa dolor asperiores mollitia unde beatae dolorum nulla, sequi
          dicta cum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Impedit excepturi eos voluptatem dolorem delectus magni vero iure
          voluptate vitae, ipsa dolor asperiores mollitia unde beatae dolorum
          nulla.
        </p>
      </div>

      <div className="cards">
        <button className="card">
          <h3 style={h3Style}>{textoCard}</h3>
          <p>{pgCard}</p>
          <div className="circle"></div>
        </button>
        <button className="card">
          <h3 style={h3Style}>{textoCard}</h3>
          <p>{pgCard}</p>
          <div className="circle"></div>
        </button>
        <button className="card">
          <div className="circle"></div>
          <h3 style={h3Style}>{textoCard}</h3>
          <p>{pgCard}</p>
        </button>
        <button className="card">
          <h3 style={h3Style}>{textoCard}</h3>
          <p>{pgCard}</p>
          <div className="circle"></div>
        </button>
      </div>
    </div>
  );
};

export default MiddlePart;
