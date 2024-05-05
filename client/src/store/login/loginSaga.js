import { put, call, takeLatest } from "redux-saga/effects";
import { loginConstants } from "./loginConstant"
import {loginParser} from "./loginParser"
import { loginApi } from "./loginApi";


function* logIn({payload}){
   try {
    yield put({ type: loginConstants.LOGIN_REQUEST });
    const resposne = yield call(loginApi.logIn, payload);
    const parserRes = loginParser.login(resposne);
    yield put({ type: loginConstants.LOGIN_RESPOSE, payload: parserRes});
   } catch (error) {
    yield put({ type : loginConstants.LOGIN_REQUEST, payload: []})
   }
}


export function* loginSaga(){
   yield takeLatest(loginConstants.LOGIN_SAGA, logIn)
}