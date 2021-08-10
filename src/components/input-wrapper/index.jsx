import React from 'react';
import './styles.scss';

export default class InputWrapper extends React.Component {

  renderInputButton = (value) => {
    const { onSubmit, onCancel } = this.props;

    if (value) {
      return (
        <button className="submit" onClick={this.props.onSubmit}>
          <i className="fas fa-check"></i>
        </button>
      )
    } else {
      return (
        <button className="cancel" onClick={this.props.onCancel}>
          <i className="fas fa-times"></i>
        </button>
      )
    }
  }

  render () {
    const { onChange, value, onKeyUp } = this.props;

    return (
      <div className="input-wrapper">
        <input
          type="text"
          autoFocus
          onChange={onChange}
          value={value}
          onKeyUp={onKeyUp}
        />
        {this.renderInputButton(value)}
      </div>
    )
  }
}
