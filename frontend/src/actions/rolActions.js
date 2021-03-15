import axios from "axios";

import { GET_LIST_ROLES_BY_ROLE } from "./types.js";

export const getListRolesByRole = (role) => (dispatch) => {
  axios
    .get(`/services_fastcode/webapi/roles_service/${role}`)
    .then((res) =>
      dispatch({
        type: GET_LIST_ROLES_BY_ROLE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
