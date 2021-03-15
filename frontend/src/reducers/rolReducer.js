import { GET_LIST_ROLES_BY_ROLE } from "../actions/types.js";

//const isEmpty = require("is-empty");

const initialState = {
  listRolesByRole: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_ROLES_BY_ROLE:
      return {
        ...state,
        listRolesByRole: action.payload,
      };
    default:
      return state;
  }
}
