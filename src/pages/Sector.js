import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/sector.css';
import { BsArrowLeft } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { createSector } from '../redux/actions/index';

import AlertNotification from '../components/AlertNotification';

export default function Sector(){
    const [code, setCode] = useState('');
    const [sector, setSector] = useState('');
    const [show, setShow] = useState(false);

    const data = useSelector(state => state.sectors)
    const dispatch = useDispatch();

    function onSubmit(event){
        event.preventDefault()
        dispatch(createSector(sector))
        
        if(data) setShow(true)
        
        setCode('')
        setSector('')        
    }
    

    function toggle() {
        setShow(false)
    }
    return (
        <div className="container-sector">
            <h2 style={{ marginLeft: 50 , marginBottom: 50 }}>Cadastro de Setor</h2>            
            <form onSubmit={onSubmit}>
                <div className="groupFields">
                    <input 
                        value={code}  
                        onChange={e => setCode(e.target.value)} 
                        className="field-code"
                        placeholder="Código" 
                        type="text" 
                    />
                    <input 
                        value={sector}
                         onChange={e => setSector(e.target.value)} 
                         className="field-sector"
                         placeholder="Informe o setor" 
                         type="text"
                    />                    
                </div>               
                <div className="groupButton-save-back">
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
            <AlertNotification toggle={toggle}  visible={show} type='success' text="Setor inserido com sucesso!" /> 
        </div>
    )
}