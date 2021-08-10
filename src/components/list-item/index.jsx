import React from 'react';
import './styles.scss';

export default class ListItem extends React.Component {
  render () {
    const { content } = this.props;
    const onDelete = () => this.props.onDelete(content);

    return (
      <li>{content}
        <span className="delete" onClick={onDelete}>
          <i className="fas fa-times"></i>
        </span>
      </li>
    )
  }
}
