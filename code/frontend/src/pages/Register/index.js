import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi"

import './styles.css';
import api from '../../services/api';

import { useAlert } from "react-alert";

export default function Register(){

    // Getting states.
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUF] = useState("");

    // Getting useHistory used to back frontend path.
    const history = useHistory();

    const alert = useAlert();

    // Register Handler Function.
    async function handlerRegister(e){
        e.preventDefault();
        const data = {
            name,
            email, 
            whatsapp,
            city, 
            uf
        };
        // Register Data in Backend.
        try {
            const response = await api.post("ongs", data);
            alert.show(`Seu ID de acesso: ${response.data.id}`);
            history.push("/");
        } catch (error) {
            alert.show(`Erro no castro, tente novamente - ${error}`);
        }
    }

    // HTML Return.
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handlerRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={ name }
                        onChange={ event => setName(event.target.value) }/>
                    <input 
                        type="email"
                        placeholder="E-mail"
                        value={ email }
                        onChange={ event => setEmail(event.target.value) }/>
                    <input 
                        placeholder="WhatsApp"
                        value={ whatsapp }
                        onChange={ event => setWhatsapp(event.target.value) }/>
                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={ city }
                            onChange={ event => setCity(event.target.value) }/>
                        <input 
                            placeholder="UF" 
                            style={ { width: 80 } } 
                            value={ uf }
                            onChange={ event => setUF(event.target.value) }/>
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
