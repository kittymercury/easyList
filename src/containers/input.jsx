import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputComponent from '../components/input/index.jsx';
import * as ActionCreators from '../actions/actionCreators';

const mapStateToProps = (state) => {
  return { input: state.input }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openInput: bindActionCreators(ActionCreators.openInput, dispatch),
    closeInput: bindActionCreators(ActionCreators.closeInput, dispatch),
    changeInputValue: bindActionCreators(ActionCreators.changeInputValue, dispatch),
    addListItem: bindActionCreators(ActionCreators.addListItem, dispatch)
  }
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(InputComponent);
