import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Container login">
      <div className="title">
        <h1>Login</h1>
      </div>

      <div className="login-form">
        <form>
          <h1>Inicie sua sessão!</h1>

          <input type="email" id="email" name="email" placeholder="Email" />
          <input type="password" id="senha" name="senha" placeholder="Senha" />

          <button>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
