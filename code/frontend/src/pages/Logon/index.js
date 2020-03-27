import React, { useState } from 'react';
import { FiLogIn } from "react-icons/fi"
import "./styles.css";
import herosImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The hero"/>
                <form>
                    <h1>Faça o seu Logon</h1>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={herosImg} alt="Heros"/>
        </div>
    )
}
