import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./usersReduser";
import {combineReducers, createStore} from "redux";
import authReduser from "./authReduser";


let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser
})

let store = createStore(redusers)

export default store