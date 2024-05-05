// Constants
import { loginConstants } from "./loginConstant";

// Declared abject for store all funtions.
const loginAction = {};

// Login 
loginAction.logIn = (Payload) =>({
    type: loginConstants.LOGIN_SAGA,
    Payload
});


// Export loginAction
export {loginAction};