import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/user.css';
import { BsArrowLeft } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/actions/index';

import AlertNotification from '../components/AlertNotification';

export default function User(){
    const [crm, setCrm] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [adm, setAdm] = useState(false);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const data = useSelector(state => state.users.data)

    function onSubmit(event){
        event.preventDefault()
        dispatch(createUser(crm, name, cpf, email, username, password))

        if(data) setShow(true)
        setAdm(false)
        setCpf('')
        setCrm('')
        setEmail('')
        setName('')
        setPassword('')
        setUserName('')
    }

    function toggle() {
        setShow(false)
    }

    return (
        <div className="container-product">
            <h2 style={{ marginLeft: 50 , marginBottom: 50 }}>Cadastro de Usuário</h2>            
            <form onSubmit={onSubmit}>
                <div className="groupFields">
                    <input 
                        value={crm} 
                        onChange={e => setCrm(e.target.value)} 
                        className="field-100"
                        placeholder="CRM/COREN" 
                        type="text"
                    />                    
                </div>
                <div className="groupFields">
                    <input 
                        value={name}  
                        onChange={e => setName(e.target.value)} 
                        className="field"
                        placeholder="Nome" 
                        type="text" 
                    />
                    <input 
                        value={cpf}
                         onChange={e => setCpf(e.target.value)} 
                         className="field"
                         placeholder="CPF" 
                         type="text"
                    />                    
                </div>
                <div className="groupFields">
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                        className="field-100"
                        placeholder="E-mail" 
                        type="text" 
                    />
                </div>
                <div className="groupFields">
                    <input 
                        value={username} 
                        onChange={e => setUserName (e.target.value)} 
                        className="field"
                        placeholder="Usuário" 
                        type="text"
                    />
                    <input 
                        value={password} 
                        onChange={e => setPassword (e.target.value)} 
                        className="field"
                        placeholder="Senha" 
                        type="text"
                    />
                </div>
                <div style={{ marginLeft: 50 }}>
                    <input 
                        checked={adm} 
                        onChange={() => setAdm(!adm)} 
                        style={{ marginRight: 10 }} 
                        type="checkbox" 
                    />
                    <label 
                        onClick={() => setAdm(!adm)} 
                        htmlFor="adm"
                    >
                        Administrador
                    </label>
                </div>
                <div className="groupButton-save-back-user">
                    <button className="button-save">
                        <span>Salvar</span>
                    </button>
                    <Link to="/menu">
                        <button className="button-back">
                            <BsArrowLeft size={24} color="#fff" />
                        </button>
                    </Link>
                </div>
            </form>
            <AlertNotification toggle={toggle}  visible={show} type='success' text="Usuário inserido com sucesso!" />
        </div>
    )
}