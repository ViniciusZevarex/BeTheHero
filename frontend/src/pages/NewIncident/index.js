import React, { useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import './styles.css';

import api from '../../services/api';

export default function Register(){
    const ong_id = localStorage.getItem('ongId');

    const history = useHistory();

    const [title,setTitle]              = useState('');
    const [description, setDescription] = useState('');
    const [value,setValue]              = useState('');


    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization: ong_id,
                }
            });

            history.push('/profile');
        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente!!!');
        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input 
                        placeholder="Valor em R$" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button  className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}