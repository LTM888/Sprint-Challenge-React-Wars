import React from 'react';
import './StarWars.css';

const character = props => {
    return (
        <div className= 'character'>
            <h1><stong>{props.character.name}</stong></h1>
        
            <div className='charaterInfo'>
                <div><strong>Birthyear:</strong> {props.character.birth_year}</div>
                <div><strong>Gender:</strong> {props.character.gender}</div>
                <div><strong>Height:</strong> {props.character.height}</div>
                <div><strong>Mass:</strong> {props.character.mass}</div>
                <div><strong>Hair Color:</strong> {props.character.hair_color}</div>
                <div><strong>Skin Color:</strong> {props.character.skin_color}</div>
                
                
            </div>
        </div>
    )
}

export default character;