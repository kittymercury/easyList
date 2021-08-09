import React from 'react';

export default class ButtonAdd extends React.Component {
  render () {
    return (
      <div className="button-wrapper" onClick={this.props.onClick}>
        <div className="button-add" id="focus">
          <i className="fas fa-pen"></i>
        </div>
      </div>
    )
  }
}
