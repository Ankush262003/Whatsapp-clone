import React from "react";

// @mui
import { List, ListItem } from "@mui/material";

// google oauth
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

// common
import Stack from "../common/tags/Stack";
import Text from "../common/tags/Text";
import Box from "../common/tags/Box";
import { makeStyles } from "@mui/styles";


const Dialog = () => {
 const classes = useStyles();

 // Login success controller:
 const onLoginSuccess = (response) =>{

     console.log("success->", jwtDecode(response.credential))
 }


 // Login error handeler
 const onLoginError = (response) =>{
    console.log("success->", response)
 }


 return ( 
    <>
        <Box sx={{overflow:"hidden"}} >
            {/* Landing detials and QR Box*/}
            <Stack direction="row" sx={{
                alignItems:"center",justifyContent: "space-between",
                gap:"20px",
                borderBottom:"0.2px solid #e9edef",
                margin:"50px 55px 45px 55px",
                paddingBottom:"39px"
            }}>

                {/* Contants */}
                <Box>
                {/*Landing-title */}
                <Text 
                    sx={{
                        fontSize:"28px",
                        marginBottom:"5px",
                        color:"#41525d",
                        fontWeight:300,
                        marginBottom: "28px"
                }} 
                > Use WhatsApp on your computer</Text>
                
                {/* List of login details */}
                <Box>
                    <List className={classes.orderedList} >
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem> 
                            <Stack  direction="row" sx={{gap:"2px"}}>
                            <Text>2. Tap <bold>Menu</bold></Text>
                            <Text>img</Text>
                            <Text>on Android, or <bold>Setting</bold></Text>
                            <Text>img</Text>
                            <Text>on iPhone</Text>
                            </Stack> 
                        </ListItem>
                        <ListItem>3. Tap <strong>Linked devices</strong>  and then <strong>Link a device</strong> </ListItem>
                        <ListItem>4. Point your phone at this screen to capture the QR code</ListItem>
                    </List>
                </Box>   
                </Box>

                {/* landing QR */}
                <Box sx={{
                    marginTop:" 10px",
                    position:"relative"
                }} >
                    <Box>
                        <img src="assets/images/landingPage/QR.png" width="295px" />
                    </Box>
                    <Box sx={{
                        position:"absolute", 
                        bottom:"45%", left:"12.5%",     
                    }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Stack>
                  
            {/* Link with number */}
            <Text sx={{
            color:"#008069",
            paddingLeft:"55px",
            marginBottom:"55px",
            cursor:"pointer"
            }}>
            Link with phone number
            </Text>
                     
            {/* Bottom part of landing  */}
            <Box
            sx={{
                backgroundColor:"rgba(78, 102, 118, 0.03)",
                margin:"auto",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                padding: "45px"
            }}
            >
            <Text  sx={{
                fontSize:"28px",
                color:"#41525d",
                marginBottom:"8px"
            }}> Tutorial </Text>

            <Text sx={{
            color:"#008069",
            marginBottom:"40px",
            color:"#008069",
            cursor:"pointer"
            }}>Need help to get start?</Text>

            <Box>
                <img src="assets/images/landingPage/laptopWithPhone.png" />
            </Box>
            </Box>
                                       
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


export default Dialog