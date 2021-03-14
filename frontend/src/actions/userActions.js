import axios from "axios";

import {
  SAVE_REGISTER,
  UPDATE_PASSWORD,
  GET_ALL_REGISTERS,
  GET_LIST_USERS_BY_ROLE,
  SAVE_USER_REGISTER,
  SAVE_SELECTED_ITEM,
  GET_USER,
  DELETE_USER_BY_ID,
} from "./types.js";

export const saveRegister = (Data) => (dispatch) => {
  axios
    .post(`/services_fastcode/webapi/usuario_service`, Data)
    .then((res) =>
      dispatch({
        type: SAVE_REGISTER,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const putPassword = (Data) => (dispatch) => {
  axios
    .put(`/services_fastcode/webapi/categoria_curso_service`, Data)
    .then((res) =>
      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getRegisters = () => (dispatch) => {
  axios.get(`/services_fastcode/webapi/usuario_service`).then((res) =>
    dispatch({
      type: GET_ALL_REGISTERS,
      payload: res.data,
    })
  );
};

export const getListUsersByRole = (role) => (dispatch) => {
  axios
    .get(`/services_fastcode/webapi/roles_user_service/${role}`)
    .then((res) =>
      dispatch({
        type: GET_LIST_USERS_BY_ROLE,
        payload: res.data,
      })
    );
};

//Esta acción guarda los datos del usuario que se está registrando
export const saveUserRegister = (Data) => (dispatch) => {
  axios
    .post(`/services_fastcode/webapi/usuario_service`, Data)
    .then((res) =>
      dispatch({
        type: SAVE_USER_REGISTER,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

//Recibe el id del usuario y almacena dicho valor en selectedItem ubicado en el store
export const saveSelectedItem = (userId) => (dispatch) => {
  dispatch({
    type: SAVE_SELECTED_ITEM,
    payload: userId,
  });
};

//Recibe el id de usuario y mediante este servicio le paso dicho id para que me retorne el usuario correspondiente y almacenarlo en el store
export const getUser = (userid) => (dispatch) => {
  axios.get(`/services_fastcode/webapi/usuario_service/${userid}`).then((res) =>
    dispatch({
      type: GET_USER,
      payload: res.data,
    })
  );
};

export const deleteUserById = (userData) => (dispatch) => {
  axios
    .put(`/services_fastcode/webapi/roles_user_service`, userData)
    .then((res) =>
      dispatch({
        type: DELETE_USER_BY_ID,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};