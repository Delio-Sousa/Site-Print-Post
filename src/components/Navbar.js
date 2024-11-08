// src/components/Navbar.js
import React from 'react';
import logo from '../assets/logo (2).png';
import './Navbar.css';

function Navbar() {
    return (
    <nav className="navbar">
        <img src={logo} alt="Logo do PrintPost" className="navbar-logo" />
        <ul className="navbar-links">
            <li><a href="#produto">Produto</a></li>
            <li><a href="#solucao">Soluções</a></li>
        <li><a href="#preco">Preços</a></li>
        </ul>
        <div className='navbar-buttons'>
            <button className='navbar-button'>Conecte-se</button>
            <button className='navbar-button'>Entre em Contato</button>
        </div>
    </nav>
);
}

export default Navbar;
