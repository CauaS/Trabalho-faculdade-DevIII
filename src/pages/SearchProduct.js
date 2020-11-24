import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { VscSearch } from 'react-icons/vsc'
import { BsArrowLeft } from 'react-icons/bs'
import '../styles/searchProduct.css';
import { useDispatch , useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/index';

export default function ProductSearch(){
    const [code, setCode] = useState('');
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.allProducts)

    function onSubmit(event){
        event.preventDefault()
        dispatch(getProducts())

        setCode('')
        
    }
    return (
        <div className="container-product-search">
            <div style={{ display: "flex", justifyContent: 'space-between', marginRight: 70 }}>                
                <h2 style={{ marginLeft: 50 , marginBottom: 50 }}>Consulta de Produto</h2>            
            </div>
            <form onSubmit={onSubmit}>
                <div className="groupFields">
                    <div style={{ display: 'flex' }}>
                        <input 
                            value={code}  
                            onChange={e => setCode(e.target.value)} 
                            className="field-code"
                            placeholder="Código" 
                            type="text" 
                        />
                        <button className="button-product-search">
                            <VscSearch size={24} color="#fff" />
                        </button>
                    </div>
                    <Link to="/product/insert">
                        <button className="button-back">
                            <BsArrowLeft size={24} color="#fff" />
                        </button>
                    </Link> 
                </div>
            </form>
            <table>
                <caption>Produtos</caption>
                <thead>
                    <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">QTD</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => (
                            <tr className="info-data">
                                <td data-label="Codigo">{item.code}</td>
                                <td data-label="Description">{item.description}</td>
                                <td data-label="Qtd">{item.quantity}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
}