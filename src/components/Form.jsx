import React, { Component } from 'react';
import typeForms from './TypeForms';
import NameInput from './01.NameInput';
import DescriptionInput from './02.DescriptionInput';
import AttrInput from './03.AttrInput';
import ImgInput from './04.ImgInput';
import RareInput from './05.RareInput';
import TrunfoInput from './06.TrunfoInput';
import Button from './07.Button';

export class Form extends Component {
  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo,
      onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form id="card-forms" method="get">
        <NameInput
          cardName={ cardName }
          onInputChange={ onInputChange }
        />
        <DescriptionInput
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <AttrInput
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <ImgInput
          cardImage={ cardImage }
          onInputChange={ onInputChange }
        />
        <RareInput
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />
        <TrunfoInput
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ onInputChange }
        />
        <Button
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = typeForms;

export default Form;
