import React, { Component } from 'react';
import typeForms from './TypeForms';

export default class Button extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <button
        id="save-btn"
        type="submit"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        SAVE
      </button>
    );
  }
}

Button.propTypes = (
  typeForms.isSaveButtonDisabled,
  typeForms.onSaveButtonClick
);
