import React from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi"

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The hero"/>
                <span>Bem vida, APAD</span>
                <Link className="button" to="/incidents/new">
                    Cadastrar Novo 
                </Link>
                <button type="button">
                    <FiPower size={16} color="#E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong className="caso-titulo">Caso:</strong>
                    <p>Caso teste</p>
                    <strong className="caso-titulo">Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong className="caso-titulo">Valor:</strong>
                    <p>Descrição teste</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong className="caso-titulo">Caso:</strong>
                    <p>Caso teste</p>
                    <strong className="caso-titulo">Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong className="caso-titulo">Valor:</strong>
                    <p>Descrição teste</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong className="caso-titulo">Caso:</strong>
                    <p>Caso teste</p>
                    <strong className="caso-titulo">Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong className="caso-titulo">Valor:</strong>
                    <p>Descrição teste</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong className="caso-titulo">Caso:</strong>
                    <p>Caso teste</p>
                    <strong className="caso-titulo">Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong className="caso-titulo">Valor:</strong>
                    <p>Descrição teste</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong className="caso-titulo">Caso:</strong>
                    <p>Caso teste</p>
                    <strong className="caso-titulo">Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong className="caso-titulo">Valor:</strong>
                    <p>Descrição teste</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong className="caso-titulo">Caso:</strong>
                    <p>Caso teste</p>
                    <strong className="caso-titulo">Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong className="caso-titulo">Valor:</strong>
                    <p>Descrição teste</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
                <li>
                    <strong className="caso-titulo">Caso:</strong>
                    <p>Caso teste</p>
                    <strong className="caso-titulo">Descrição:</strong>
                    <p>Descrição teste</p>
                    <strong className="caso-titulo">Valor:</strong>
                    <p>Descrição teste</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#A8A8B3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}
