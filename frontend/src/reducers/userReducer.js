import {
  SAVE_REGISTER,
  UPDATE_PASSWORD,
  GET_ALL_REGISTERS,
  GET_LIST_USERS_BY_ROLE,
  SAVE_USER_REGISTER,
  SAVE_SELECTED_ITEM,
  GET_USER,
  DELETE_USER_BY_ID,
} from "../actions/types.js";

const isEmpty = require("is-empty");

const initialState = {
  verification: false,
  registers: [],
  listUsersByRole: [],
  selectedItem: 0,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case GET_ALL_REGISTERS:
      return {
        ...state,
        registers: action.payload,
      };
    case GET_LIST_USERS_BY_ROLE:
      return {
        ...state,
        listUsersByRole: action.payload,
      };
    case SAVE_USER_REGISTER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    case SAVE_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER_BY_ID:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    default:
      return state;
  }
}
