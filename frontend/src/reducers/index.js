import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import categoryReducer from "./categoryReducer";
import informationReducer from "./informationReducer";
import userReducer from "./userReducer";
import rolReducer from "./rolReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  category: categoryReducer,
  information: informationReducer,
  user: userReducer,
  rol: rolReducer,
});
