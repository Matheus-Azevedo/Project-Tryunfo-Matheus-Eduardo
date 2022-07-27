import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class TrunfoInput extends Component {
  render() {
    const { cardTrunfo, hasTrunfo, onInputChange } = this.props;
    const showSuperTrunfo = () => {
      if (!hasTrunfo) {
        return (
          <input
            id="super-trunfo"
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        );
      }
      return 'Você já tem um Super Trunfo em seu baralho';
    };
    return (
      <label htmlFor="super-trunfo">
        Super-Trunfo:
        { showSuperTrunfo() }
      </label>
    );
  }
}

TrunfoInput.propTypes = (
  typeForms.cardTrunfo,
  typeForms.onInputChange,
  typeForms.hasTrunfo
);
