import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/users";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    async function pegarInfo() {
      const resposta = await fetch(url);
      const info = await resposta.json();
      console.log(info);
    }

    pegarInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      senha,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(res);

    setEmail("");
    setSenha("");
  };

  return (
    <div className="Container login">
      <div className="title">
        <h1>Login</h1>
      </div>

      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Inicie sua sessão!</h1>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} // na mudança ele vai setar o email pegando o valor do input
          />
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)} // na mudança ele vai setar o senha pegando o valor do input
          />

          <button>Confirmar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
