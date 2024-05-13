import React from "react";
import LoginHeader from "../../components/login/LoginHeader";
import CommonDialog from "../../components/common/tags/Dialog";
import Dialog from "../../components/login/Dialog";
import { jwtDecode } from "jwt-decode";


const LoginContainer = () =>{
   
    // Login success controller:
    const onLoginSuccess = (response) =>{
      console.log("success->", jwtDecode(response.credential))
    }

    // Login error handeler
    const onLoginError = (response) =>{
      console.log("success->", response)
    }

    return(
        <>
          <LoginHeader/>

          {/* landin dialog  popup */}
          <CommonDialog
               dialogTitleVisibility = "false"
               
               hideBackdrop="false"
               height="100%"
               width="75%"
               dialogStyle={{marginTop:"250px", boxShadow:"none"}}

               // passing style only for dialogContaint body
               dialogContentStyle = {{
                  overflow:"clip",
               }}
               
               // pass actual ui of dialog
               contentComponent = {()=>{
                  return(<Dialog
                    onLoginSuccess = {onLoginSuccess}
                    onLoginError = {onLoginError}
                  />) 
               }}    
            />
        </>
    )
}

export default LoginContainer;