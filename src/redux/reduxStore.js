import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./usersReduser";
import { combineReducers, createStore, applyMiddleware } from "redux";
import authReduser from "./authReduser";
import thunkMiddleware from "redux-thunk";

const redusers = combineReducers({
  profilePage: profileReduser,
  dialogsPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReduser,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
