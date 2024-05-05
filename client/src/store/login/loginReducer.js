import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { loginConstants } from "./loginConstant";


const initialState = {
    loginDetails: [],
    laader:{
       logInLoader:0
    }
}

export const loginReducer = persistReducer(
    {
        storage,
        key:"logIn",
        whitelist:[]
    },
    (state = initialState, {type, payload}) =>{
        switch(type){

            case loginConstants.LOGIN_REQUEST:{
                return{
                    ...state,
                    loader:{
                        logInLoader: initialState.laader.logInLoader
                    }
                }
            }

            case loginConstants.LOGIN_RESPOSE: {
                return{
                    ...state,
                    loginDetails: payload,
                    loader:{
                        logInLoader: 1
                    }
                }
            }

            default:
                return state;
        }
    }
)