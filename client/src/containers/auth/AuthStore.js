import { connect } from "react-redux" 
import { bindActionCreators } from "redux"
import {loginAction} from "../../store/login/loginAction"

const mapStateToProps = (state) =>{
   console.log("state -->", state)
   return{
     logInDetails : state.logIn.loginDetails,
     logInLoader : state.logIn.loader
   }
}

const mapDispatchToProps = (dispatch) =>bindActionCreators({
     logInAction : loginAction.logIn
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps);
