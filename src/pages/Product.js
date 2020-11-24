import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';
import { VscSearch } from 'react-icons/vsc';
import { BsArrowLeft } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../redux/actions/index';

import AlertNotification from '../components/AlertNotification';

export default function Product(){
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [qtd, setQtd] = useState('');
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const data = useSelector(state => state.products.data)
    
    function onSubmit(event){
        event.preventDefault()
        dispatch(createProduct(code, description, qtd))      
        
        if(data) setShow(true)
        setCode('')
        setDescription('')
        setQtd('')        
    }

    function toggle() {
        setShow(false)
    }

    return (
        <div className="container-product">
            <div style={{ display: "flex", justifyContent: 'space-between', marginRight: 70 }}>                
                <h2 style={{ marginLeft: 50 , marginBottom: 50 }}>Cadastro de Produto</h2>
                <Link to="/product/search">
                    <button className="button-search">
                        <VscSearch size={24} color="#fff" />
                    </button>
                </Link>            
            </div>
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
                        value={description}
                         onChange={e => setDescription(e.target.value)} 
                         className="field-sector"
                         placeholder="Descrição" 
                         type="text"
                    />
                    <input 
                        value={qtd}  
                        onChange={e => setQtd(e.target.value)} 
                        className="field-code"
                        placeholder="Qtd" 
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
            { <AlertNotification toggle={toggle}  visible={show} type='success' text="Produto inserido com sucesso!" /> }
        </div>
    )
}