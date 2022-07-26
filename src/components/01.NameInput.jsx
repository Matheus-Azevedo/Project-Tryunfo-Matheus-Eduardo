import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class NameInput extends Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <label htmlFor="card-name">
        Nome da Carta:
        <input
          id="card-name"
          name="cardName"
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

NameInput.propTypes = (
  typeForms.cardName,
  typeForms.onInputChange
);
