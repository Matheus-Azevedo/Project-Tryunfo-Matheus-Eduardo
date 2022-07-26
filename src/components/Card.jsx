import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class Card extends Component {
  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.props;

    const isSuperTrunfo = () => {
      if (cardTrunfo === true) {
        return <p data-testid="trunfo-card">Super Trunfo</p>;
      }
    };

    return (
      <section>
        <div data-testid="name-card">
          { cardName }
        </div>
        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <div data-testid="description-card">
          { cardDescription }
        </div>
        <div data-testid="attr1-card">
          { cardAttr1 }
        </div>
        <div data-testid="attr2-card">
          { cardAttr2 }
        </div>
        <div data-testid="attr3-card">
          { cardAttr3 }
        </div>
        <div data-testid="rare-card">
          { cardRare }
        </div>
        <div>
          { isSuperTrunfo() }
        </div>
      </section>
    );
  }
}

Card.propTypes = typeForms;
