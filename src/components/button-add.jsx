import React from 'react';

export default class ButtonAdd extends React.Component {
  render () {
    return (
      <div className="button-wrapper" onClick={this.props.onClick}>
        <button className="button-add" id="focus">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    )
  }
}
