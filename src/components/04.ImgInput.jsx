import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class ImgInput extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label htmlFor="card-img">
        Imagem:
        <input
          id="card-img"
          name="cardImage"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

ImgInput.propTypes = (
  typeForms.cardImage,
  typeForms.onInputChange
);
