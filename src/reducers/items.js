import * as Types from '../actions/types';
import initialState from './initialState';

export default (state = initialState.items, action) => {
  switch (action.type) {
    case Types.ADD_LIST_ITEM:
      return state.concat(action.payload);
    case Types.DELETE_LIST_ITEM:
      return state.filter((item) => item.id !== action.payload.id);
  }

  return state;
}
