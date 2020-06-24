import axios from "axios";

import { GET_CATEGORIES } from "./types.js";

export const getCategories = (id) => (dispatch) => {
  axios.get(`/services_fastcode/webapi/categoria_curso_service/${id}`).then((res) =>
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    })
  );
};
