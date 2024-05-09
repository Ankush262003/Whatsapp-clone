import { AppBar, Toolbar, colors, styled } from "@mui/material";
import React from "react";
import Stack from "../common/Stack";
import Dialog from "../common/Dialog";
import Text from "../common/Text";
import Box from "../common/Box";
import { makeStyles } from "@mui/styles";
import { Margin } from "@mui/icons-material";

const LoginDialog = () =>{

   const classes = useStyles();
   return(
    <Box sx={{
      backgroundColor:"#d1d7db"
      }}>
         <AppBar>
            <StyledToolbar>
              
            </StyledToolbar>
         </AppBar>
         <Dialog
            maxWidth="lg"
            margin=""
            contentComponent = {()=>{
               return <Stack padding="49px 28px" >
                  <Box sx={{
                     marginLeft:"22px"
                  }} >
                     <Text sx={{
                        fontSize:"28px",
                        marginBottom:"24px",
                        color:"#41525d"
                     }} >Use WhatsApp on your computer</Text>
                  </Box>
                  <Box>
                     <ol className={classes.orderedList} >
                        <li>Open WhatsApp on your phone</li>
                        <li> 
                           <Stack  direction="row" sx={{gap:"2px"}}>
                              <Text>Tap <bold>Menu</bold></Text>
                              <Text>img</Text>
                              <Text>on Android, or <bold>Setting</bold></Text>
                              <Text>img</Text>
                              <Text>on iPhone</Text>
                           </Stack> 
                        </li>
                        <li>Tap <strong>Linked devices</strong>  and then <strong>Link a device</strong> </li>
                        <li>Point your phone at this screen to capture the QR code</li>
                     </ol>
                  </Box>
                  <Box className={classes.divider}  ></Box>              
               </Stack>
            }}           
         />   
      </Box>
   )
}



const useStyles = makeStyles((theme)=>({

   // style of all li of ol
   orderedList:{
      "& >li":{
      margin:"5px 0px 24px 0px",
      colors:"#3b4a54"
    }
   }
}))

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
   alignItems: 'flex-start',
   paddingTop: theme.spacing(1),
   paddingBottom: theme.spacing(2),
   backgroundColor:"#00a884",
   // Override media queries injected by theme.mixins.toolbar
   '@media all': {
     minHeight: "193px",
   },
}));


export default LoginDialog