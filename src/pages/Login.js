import React,  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import loginImg from '../img/login.svg';
import '../styles/login.css';

import { CSSTransition } from 'react-transition-group';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/index'; 

export default function Login({ history }){
    const login_success = useSelector(state => state.users.login_success)
    const dispatch = useDispatch()

    const [start, setStart] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setStart(start => !start)
    }, [dispatch])

    function handleSubmit(){
        dispatch(login( email, password ))        
    }

    if(login_success) { history.push('/menu') }

    return (
        <div className="container-login">
            <aside className="left">
                <span className="title-login">
                <strong>EPI </strong>
                    -Equipamento de Proteção Individual
                </span>
                <span className="logan-login">
                    Todos contra <br/>
                    <strong>COVID-19</strong>
                </span>
                <img src={loginImg} alt="Login" className="imgLogin"/>
            </aside>
            <span className="diviser"/>
                <CSSTransition in={start} timeout={500} unmountOnExit  classNames="start">
                    <main className="right">
                        <h1>Bem-vindo</h1>
                            <input value={email} type="text" placeholder="Email" className="user-field" onChange={e =>setEmail(e.target.value)}/>
                            <input value={password} type="text" placeholder="Senha" className="pass-field"  onChange={e => setPassword(e.target.value)}/>
                            <Link>
                                <button className="login-button" onClick={handleSubmit}>Login</button>
                            </Link>
                        <span>Alameda Cannes - 1884 - São Paulo</span>
                    </main>
                </CSSTransition>
        </div>
    )
}