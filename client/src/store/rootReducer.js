import {combineReducers} from "redux"

// Reducers
import { loginReducer } from "./login/loginReducer";


const rootReducer = combineReducers({
   logIn: loginReducer

});

export default rootReducer;