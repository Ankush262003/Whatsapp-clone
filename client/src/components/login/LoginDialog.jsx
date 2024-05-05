import { AppBar, Box, Toolbar, styled } from "@mui/material";
import React from "react";
import Stack from "../common/Stack";
import Dialog from "../common/Dialog";
import Text from "../common/Text";

const LoginDialog = () =>{
   return(
    <Box sx={{
      backgroundColor:"#d1d7db"
      }}>
         <AppBar>
            <StyledToolbar>
              ,sdjfsj
            </StyledToolbar>
         </AppBar>
         <Dialog
            contentComponent = {()=>{
               return <Stack>
                  <Text>Use WhatsApp on your computer</Text>
                  <Box>
                     <ol>
                        <li>Open WhatsApp on your phone</li>
                        <li>B</li>
                        <li>Tap <strong>Linked devices</strong>  and then <strong>Link a device</strong> </li>
                        <li>Point your phone at this screen to capture the QR code</li>
                     </ol>
                  </Box>
               </Stack>
            }}           
         />
         
         
      </Box>
   )
}


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