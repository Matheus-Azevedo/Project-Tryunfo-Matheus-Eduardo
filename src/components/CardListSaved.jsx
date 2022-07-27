import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardListSaved extends Component {
  render() {
    const { arrayOfCards, removeThisCard } = this.props;
    const cardListSection = () => {
      const result = arrayOfCards.map((card) => (
        <div key={ card.cardName }>
          <div id={ card.cardName } data-testid="name-card">{card.cardName}</div>
          <div>
            <img
              src={ card.cardImage }
              alt={ card.cardName }
              data-testid="image-card"
            />
          </div>
          <div data-testid="description-card">{card.cardDescription}</div>
          <div data-testid="attr1-card">{card.cardAttr1}</div>
          <div data-testid="attr2-card">{card.cardAttr2}</div>
          <div data-testid="attr3-card">{card.cardAttr3}</div>
          <div data-testid="rare-card">{card.cardRare}</div>
          <div>{ card.cardTrunfo }</div>
          <button
            onClick={ removeThisCard }
            type="button"
            data-testid="delete-button"
          >
            Excluir
          </button>
        </div>
      ));
      return result;
    };
    return (
      <section>{ cardListSection() }</section>
    );
  }
}

CardListSaved.propTypes = {
  arrayOfCards: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.number,
    cardAttr2: PropTypes.number,
    cardAttr3: PropTypes.number,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  removeThisCard: PropTypes.func.isRequired,
};
