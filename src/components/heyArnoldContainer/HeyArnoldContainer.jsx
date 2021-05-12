import React, { Component } from 'react'
import { fetchCharacters } from '../../services/heyArnoldApi'
import CharacterList from '../characters/CharacterList';


export default class HeyArnoldContainer extends Component {
    state = {
        loading: true,
        characters: [],
    }

    async componentDidMount() {
        try {
            const characters = await fetchCharacters();
        this.setState({
            characters,
            loading: false,
        });
        } catch (error) {
            throw Error(error)
        }
    
    }

    render() {
        const { loading, characters } = this.state;
        return (loading) ? <h1>Loading...</h1>:
            <CharacterList characters={characters} name='' id='' />
    }
}
