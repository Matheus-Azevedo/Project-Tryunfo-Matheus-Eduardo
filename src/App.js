import React from 'react';
import Card from './components/Card';
import { Form } from './components/Form';
import CardListSaved from './components/CardListSaved';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    arrayOfCards: [],
  }

  onInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [name]: result }, () => {
      const {
        cardName, cardDescription,
        cardAttr1, cardAttr2, cardAttr3,
        cardImage, cardRare,
      } = this.state;
      const n210 = 210;
      const n90 = 90;
      const Attr1 = parseInt(cardAttr1, 10);
      const Attr2 = parseInt(cardAttr2, 10);
      const Attr3 = parseInt(cardAttr3, 10);
      const cardNameLengthIsTrue = cardName.length === 0; // true ou false;
      const cardDescriptionLengthIsTrue = cardDescription.length === 0;
      const cardImageLengthIsTrue = cardImage.length === 0;
      const cardRareLengthIsTrue = cardRare.length === 0;
      const cardAttrSumIsTrue = Attr1 + Attr2 + Attr3 > n210;
      const cardAttrLimIsTrue = Attr1 > n90 || Attr2 > n90 || Attr3 > n90;
      const cardAttrNegaIsTrue = Attr1 < 0 || Attr2 < 0 || Attr3 < 0;
      const buttonIsDisabled = cardNameLengthIsTrue || cardDescriptionLengthIsTrue
        || cardAttrSumIsTrue || cardImageLengthIsTrue
        || cardRareLengthIsTrue || cardAttrLimIsTrue || cardAttrNegaIsTrue;

      this.setState({ isSaveButtonDisabled: buttonIsDisabled });
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      arrayOfCards: [...prevState.arrayOfCards, card],
    }), () => {
      const { arrayOfCards } = this.state;
      const result = arrayOfCards.some((e) => e.cardTrunfo === true);
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        hasTrunfo: result,
      });
    });
  }

  removeThisCard = ({ target }) => {
    const { arrayOfCards, hasTrunfo } = this.state;
    const name = target.parentNode.firstChild.id;
    const array = arrayOfCards.filter((card) => (
      card.cardName !== name
    ));
    this.setState({ arrayOfCards: array });
    if (hasTrunfo) this.setState({ hasTrunfo: false });
  };

  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      arrayOfCards,
    } = this.state;
    return (
      <section>
        <header>
          <h1>Tryunfo!!</h1>
        </header>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <section>
            <CardListSaved
              arrayOfCards={ arrayOfCards }
              removeThisCard={ this.removeThisCard }
            />
          </section>
        </main>
      </section>
    );
  }
}

export default App;
