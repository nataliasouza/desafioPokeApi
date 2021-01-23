import React from 'react';

import './style.css';

function Card({ pokemon }) {
    return (
        <div className="card">
            <div className="card_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="card_name">
                {pokemon.name}
            </div>
            <div className="card_types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="card_type">
                                {type.type.name}
                            </div>
                            
                        )
                    })
                }   
            </div>
            <div className="btn_capturar">
                <button className="capturar">Capturar</button>
            </div>
            <div className="card_info">
                <div className="card_data card_data_weight">
                    <p className="title">Peso</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="card_data card_data_height">
                    <p className="title">Altura</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="card_data card_data_ability">
                    <p className="title">Habilidade</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;