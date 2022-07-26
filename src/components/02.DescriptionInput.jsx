import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class DescriptionInput extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label htmlFor="description-card">
        Descrição da carta:
        <textarea
          name="cardDescription"
          id="description-card"
          cols="30"
          rows="10"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

DescriptionInput.propTypes = (
  typeForms.cardDescription,
  typeForms.onInputChange
);
