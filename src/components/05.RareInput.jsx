import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class RareInput extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="rarity-card">
        Raridade:
        <select
          name="cardRare"
          id="rarity-card"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">NORMAL</option>
          <option value="raro">RARO</option>
          <option value="muito raro">MUITO RARO</option>
        </select>
      </label>
    );
  }
}

RareInput.propTypes = (
  typeForms.cardRare,
  typeForms.onInputChange
);
