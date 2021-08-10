import React from 'react';
import './styles.scss';

import ListItem from '../list-item';

export default class ListWrapper extends React.Component {
  render () {
    const { items, onDelete, content } = this.props;

    return (
      <div className="list-wrapper">
        <ul className="list">
          {items.map((item, index) => {
            return (
              <ListItem
                content={item}
                key={index}
                onDelete={onDelete}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
