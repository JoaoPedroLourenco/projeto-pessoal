import React from "react";
import "./Novidades.css";

const Novidades = ({ cardTexto, descCard }) => {
  return (
    <div className="direita">
      <div className="novidades">
        <h3>Lorem Ipsum</h3>
        <p>Novidades!</p>

        <div className="novidadeCards">
          <div
            className="card cd1"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/19472339/pexels-photo-19472339/free-photo-of-fofo-bonitinho-gato-deitado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="circle"></div>
            <h3>{cardTexto}</h3>
            <p>{descCard}</p>
          </div>

          <div
            className="card cd2"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/23228195/pexels-photo-23228195/free-photo-of-copo-taca-caneca-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="circle"></div>
            <h3>{cardTexto}</h3>
            <p>{descCard}</p>
          </div>

          <div
            className="card cd3"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/23914569/pexels-photo-23914569/free-photo-of-madeira-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="circle"></div>
            <h3>{cardTexto}</h3>
            <p>{descCard}</p>
          </div>

          <div
            className="card cd4"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/21765179/pexels-photo-21765179/free-photo-of-construcao-predio-edificio-escritorio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="circle"></div>
            <h3>{cardTexto}</h3>
            <p>{descCard}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novidades;
