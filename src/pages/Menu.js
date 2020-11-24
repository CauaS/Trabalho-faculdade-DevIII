import React from 'react';
import '../styles/menu.css';
import { Link } from 'react-router-dom';

import { FaUserAlt  } from 'react-icons/fa';
import { BsArrowUpDown  } from 'react-icons/bs';
import { FiGlobe  } from 'react-icons/fi';
import { AiOutlineFileSync  } from 'react-icons/ai';

import ButtonMenu from '../components/ButtonMenu';
import CarouselImages from '../components/Carouselmages';

import meninaMenu from '../img/menina.svg';

export default function Menu() {
    return (
        <div className="container-menu">
            <div className="menu-area">
                <img  className="photo-menu" src={meninaMenu} alt="Menina"/>
                <div className='menu-options'>
                    <Link to="/user/insert" style={{ textDecoration: 'none' }}>
                        <ButtonMenu background='#1D3557' text='Usuário'>
                            <FaUserAlt size={24} color="#fff"/>
                        </ButtonMenu>
                    </Link>
                    <Link to="/product/insert" style={{ textDecoration: 'none' }}>
                        <ButtonMenu background='#457B9D' text='Produtos'>
                            <BsArrowUpDown size={28} color="#fff"/>
                        </ButtonMenu>
                    </Link>
                    <Link to="/sector/insert" style={{ textDecoration: 'none' }}>
                        <ButtonMenu background='#E63946' text='Setores'>
                            <FiGlobe size={24} color="#fff"/>
                        </ButtonMenu>
                    </Link>
                    <Link to="/user/insert" style={{ textDecoration: 'none' }}>
                        <ButtonMenu background='#C4C4C4' text='Relatórios'>
                            <AiOutlineFileSync size={28} color="#fff"/>
                        </ButtonMenu> 
                    </Link>                   
                </div>
                <div>
                    <CarouselImages />
                </div>            
            </div>
        </div>
    )
}
