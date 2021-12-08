import React from 'react';

import './styles.scss';

export default class ListWrapper extends React.Component {
  handleClickDelete = (item) => {
    this.props.deleteListItem(item);
  }

  render () {
    const items = this.props.items;

    return (
      <div className="list-wrapper">
        <ul className="list">
          {items.map((item) => {
            return (
              <li id={item.id} key={item.id}>
                <span>{item.content}</span>
                <span className="delete" onClick={() => this.handleClickDelete(item)}>
                  <i className="fas fa-times"></i>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
