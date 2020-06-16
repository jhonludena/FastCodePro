import axios from "axios";

import { GET_CATEGORIES } from "./types.js";

export const getCategories = () => (dispatch) => {
  axios.get("/services_fastcode/webapi/categoria_service").then((res) =>
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    })
  );
};
