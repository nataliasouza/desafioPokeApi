import React from 'react';
import './style.css';
import logo from './logo.png';
import pokes from './pokes.png';

function Navbar() {
    return (
        <div className="Navbar">
            <div className = "imgnav">
                <img src={logo} alt='logoapp' width="10%"/>
                <img src={pokes} alt='pokemons' width="10%"/>
            </div>
            <div className='pokemons'>
                <a className="tudo" href="todosPokemons.html">Todos Pokemons</a>
                <a className='meu' href="meusPokemons.html">Meus Pokemons</a>
            </div>

            <div className="busca">
                <input type="text" className="campoBusca" placeholder="Pesquisar..." />
            </div>    
        </div>
    );
}

export default Navbar;