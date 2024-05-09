import React, { memo } from "react";
import { Dialog as MDialog, DialogTitle, IconButton, Paper, DialogContent, DialogActions } from "@mui/material";
import { Close, Margin } from "@mui/icons-material";
import {makeStyles, createStyles} from "@mui/styles";
import Stack from "./Stack";

const Dialog = (props) =>{
    const  {
        title, 
        onOpen, onClose,
        contentComponent, actionComponent,
        disableEnforceFocus = true,
        children, 
        maxWidth="sm",
        sx,
        ...resetProps
    } = props

    const classes = useStyles()
    return(<>
        <MDialog
         open={true}
         clone={false}
         disableEnforceFocus={""}
         fullWidth
         maxWidth={maxWidth}
         aria-labelledby=""
         {...resetProps}
        >
            <Stack sx={{
               padding:"10px 10px",
            }}>
                {/* <DialogTitle className={classes.DialogTitle}
                sx={{
                    padding:"0px"
                    }}
                    >
                    <div>
                    Dialog Title
                    </div>
                    <IconButton>
                        <Close/>
                    </IconButton>
                </DialogTitle> */}
                <DialogContent sx={{
                    padding:"0px"
                }}>
                    {contentComponent && contentComponent()}
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Stack>
        </MDialog>     
    </>)
    
}


const useStyles = makeStyles((theme) =>
   createStyles({
    // root:{
    //     padding:"0px",
    // },
    // Paper:{
    //     Margin:15,
    //     width:"100%",
    // },

    // DialogTitle style css:
    DialogTitle: {
        display:"flex", justifyContent:"space-between"
    }



   })
)

export default React.memo(Dialog)