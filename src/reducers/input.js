import * as Types from '../actions/types';
import initialState from './initialState';

export default (state = initialState.input, action) => {
  switch (action.type) {
    case Types.OPEN_INPUT:
      return { ...state, visible: true };
    case Types.CLOSE_INPUT:
      return { ...state, visible: false, value: '' };
    case Types.CHANGE_VALUE:
      return { ...state, value: action.payload };
  }

  return state;
}
