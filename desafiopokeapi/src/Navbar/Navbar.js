import React from 'react'
import logo from '../Navbar/logo_pokemon.png'

export default function Navbar(){
    return(
       <nav className='menu'>
           <img className="logo" src={logo} alt={"LogoPokemon"}/>
           <div className="todosPokemons"><a href="todosPokemons.html">Todos Pokemons</a></div>
           <div className="meusPokemons"><a href="meusPokemons.html">Meus Pokemons</a></div>
           <input type="text" className="campoBusca" placeholder="Buscar..." />
       </nav>
    );
}
