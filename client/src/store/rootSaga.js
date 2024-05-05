import {all} from "redux-saga/effects"

// Reducer
import { loginSaga } from "./login/loginSaga";

// Generator fuction
function* rootSaga(){
    yield all([
        loginSaga()
    ]);
}

export default rootSaga;