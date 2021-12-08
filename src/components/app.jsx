import React from 'react';

import ListContainer from '../containers/list';
import InputContainer from '../containers/input';

export default class App extends React.Component {
  handleChangeInput = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClickSubmit = () => {
    const { items, input } = this.props;

    if (input.value.trim()) {
      this.props.addListItem(input.value);
      this.props.closeInput();
      const list = document.querySelector(".list-wrapper");
      list.scrollTop = list.scrollHeight + 70;
    } else {
      this.props.closeInput();
    }
  }

  render() {
    return (
      <div className="easylist">
        <div className="header">easyList</div>
        <ListContainer />
        <InputContainer />
      </div>
    );
  }
};
