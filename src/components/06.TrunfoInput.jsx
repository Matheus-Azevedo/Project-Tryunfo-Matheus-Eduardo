import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class TrunfoInput extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="super-trunfo">
        Super-Trunfo:
        <input
          id="super-trunfo"
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

TrunfoInput.propTypes = (
  typeForms.cardTrunfo,
  typeForms.onInputChange
);
