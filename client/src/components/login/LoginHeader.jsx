import React from "react";

// @mui
import { AppBar, Toolbar, colors, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";

// common
import Dialog from "./Dialog";
import CommonDialog from "../common/tags/Dialog"
import Box from "../common/tags/Box";




const LoginHeader = () =>{

   const classes = useStyles();

   return(
      <>
         <Box sx={{
           backgroundColor:"#d1d7db",
           height:"100vh"
         }}>
            <Header>
               <Toolbar>
                 
               </Toolbar>
            </Header> 
         </Box>
      </>
   )
}



const useStyles = makeStyles((theme)=>({

   // list items css. 
   orderedList:{
      paddingLeft: "20px",

      "& >li":{
      margin:"5px 0px 24px 0px",
      colors:"#3b4a54",
      padding:"0px 0px 0px 1px",
    }
   },


}))


const Header = styled(AppBar)(({theme})=>({
   height:"220px",
   backgroundColor:"#00a884",
   boxShadow:"none"
 
}))

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//    alignItems: 'flex-start',
//    paddingTop: theme.spacing(1),
//    paddingBottom: theme.spacing(2),
//    backgroundColor:"#00a884",

//    // Override media queries injected by theme.mixins.toolbar
//    '@media all': {
//      minHeight: "193px",
//    },

// }));


export default LoginHeader