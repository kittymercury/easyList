import React from 'react';

import './styles.scss';

export default class InputWrapper extends React.Component {
  handleClickPlus = () => {
    this.props.openInput();
  }

  handleClickCancel = () => {
    this.props.closeInput();
  }

  handleClickSubmit = () => {
    const input = this.props.input;
    this.props.closeInput();
    this.props.addListItem({ content: input.value, id: +new Date() });
    const list = document.querySelector(".list-wrapper");
    list.scrollTop = list.scrollHeight + 70;
  }

  handleChangeInput = (e) => {
    this.props.changeInputValue(e.target.value)
  }

  renderInputButton = (value) => {
    if (value) {
      return (
        <button className="submit" onClick={() => this.handleClickSubmit(value)}>
          <i className="fas fa-check"></i>
        </button>
      )
    } else {
      return (
        <button className="cancel" onClick={this.handleClickCancel}>
          <i className="fas fa-times"></i>
        </button>
      )
    }
  }

  render () {
    const input = this.props.input;

    return (
      <div>
        {input.visible
          ? (
            <div className="input-wrapper">
              <input type="text" onChange={this.handleChangeInput}/>
              {this.renderInputButton(input.value)}
            </div>
          )
          : (
            <div className="button-wrapper" onClick={this.handleClickPlus}>
              <button className="button-add" id="focus">
                <i className="fas fa-pen"></i>
              </button>
            </div>
          )}
      </div>
    )
  }
}
