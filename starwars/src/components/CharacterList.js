import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div className='characterList' >
                {props.character.map(item => ( < 
                    Character character = { item }
                    key = { item.created} />
                    ))
    
                }       
        </div>
    )
}

export default CharacterList;