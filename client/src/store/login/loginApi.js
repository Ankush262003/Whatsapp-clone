import { loginConstants } from "./loginConstant";

const loginApi = {};

loginApi.logIn = (payload) =>{
   const url = loginConstants.LOGIN_API;

   const data = {
    name : "Shivank Singh",
    age : 21,
    address : "mulund"
   }

   return data;
}


export {loginApi};