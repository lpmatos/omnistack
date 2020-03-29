import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi"

import "./styles.css";
import api from '../../services/api';

import herosImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import { useAlert } from "react-alert";

export default function Logon() {
  // Getting states.
  const [id, setId] = useState("");

  // Getting useHistory.
  const history = useHistory();

  const alert = useAlert();

  // Handler Login.
  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (error) {
      alert.show("Falha no Login. Tente novamente...");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The hero"/>
          <form onSubmit={handleLogin}>
            <h1>Faça seu Logon</h1>
            <input 
            placeholder="Sua ID"
            value={ id }
            onChange={ event => setId(event.target.value) } />
            <button className="button" type="submit">Entrar</button>
            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </form>
      </section>
      <img src={herosImg} alt="Heros"/>
    </div>
  )
}

