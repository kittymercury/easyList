import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListComponent from '../components/list';
import * as ActionCreators from '../actions/actionCreators';

const mapStateToProps = (state) => {
  return { items: state.items }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListItem: bindActionCreators(ActionCreators.addListItem, dispatch),
    deleteListItem: bindActionCreators(ActionCreators.deleteListItem, dispatch),
  }
}

const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(ListComponent);
