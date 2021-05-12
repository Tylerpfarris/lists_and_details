import React, { Component } from 'react';
import { findById } from '../../services/findById';
import { getRandomGIF } from '../../services/getRandomGIF';
export default class CharacterDetails extends Component {
  state = {
    character: {},
    loading: true,
    gif: [],
  };

  async componentDidMount() {
    try {
      const id = await this.props.match.params.id;
      const character = await findById(id);
      const gif = await getRandomGIF();
      this.setState({
        character,
        loading: false,
        gif,
      });
    } catch (error) {
      throw Error(error);
    }
  }

  render() {
    const { image, name } = this.state.character;
    const { loading, gif } = this.state;
    return loading ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <div role="display" aria-label="character details">
          <h1>{name}</h1>
          <img src={image} alt={name} />
        </div>
        <h3>A Random GIF</h3>
        <img src={gif.gifLink} alt={gif._id} />
      </>
    );
  }
}
