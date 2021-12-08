import * as Types from './types';

// items
export const deleteListItem = (item) => {
  return { type: Types.DELETE_LIST_ITEM, payload: item }
}

export const addListItem = (item) => {
  return { type: Types.ADD_LIST_ITEM, payload: item }
}

// input
export const openInput = () => {
  return { type: Types.OPEN_INPUT, payload: {} }
}

export const closeInput = () => {
  return { type: Types.CLOSE_INPUT, payload: {} }
}

export const changeInputValue = (value) => {
  return { type: Types.CHANGE_VALUE, payload: value  }
}
