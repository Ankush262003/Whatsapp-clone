import { all } from "redux-saga/effects";
import { loginSaga } from "./login/loginSaga";

function* rootSaga() {
    yield all([
        loginSaga()
    ])
}

export default rootSaga