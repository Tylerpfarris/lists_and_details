import React from 'react'
import PropTypes from 'prop-types'
import Character from './Character'
import CharacterSearch from './CharacterSearch'
const CharacterList = ({ characters }) => (

    <>
       <CharacterSearch />
    <ul aria-label='characters'>
        {characters.map(character => (
            <li key={character.id}>
                <Character
                    name={character.name}
                    id={character.id}
                
                    />
            </li>
        ))}
        </ul>
    </>
)

CharacterList.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default CharacterList
