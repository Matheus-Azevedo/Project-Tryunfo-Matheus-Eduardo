import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class AttrInput extends Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, onInputChange } = this.props;
    return (
      <section>
        <label htmlFor="card-attr1">
          Atributo 1:
          <input
            id="card-attr1"
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr2">
          Atributo 2:
          <input
            id="card-attr2"
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr3">
          Atributo 3:
          <input
            id="card-attr3"
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
      </section>
    );
  }
}

AttrInput.propTypes = (
  typeForms.cardAttr1,
  typeForms.cardAttr2,
  typeForms.cardAttr3,
  typeForms.onInputChange
);
