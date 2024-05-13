import React, { memo } from "react";
import { Dialog as MDialog, DialogTitle, IconButton, Paper, DialogContent, DialogActions } from "@mui/material";
import { Close, Height, Margin, Widgets } from "@mui/icons-material";
import {makeStyles, createStyles} from "@mui/styles";
import Stack from "./Stack";
import Box from "./Box";

const Dialog = (props) =>{
    const  {
        // DialogTitle:
        title = "", 
        dialogTitleVisibility = "true", // hide or show dialogTitle 
        dialogTitleStyle,               // take sx style of DialogTitelStyle

        // DialogContent
        contentComponent,   // take ui code or content
        dialogContentStyle, // take sx style of DialogContaint

        // DialogActions:
        dialogActionsStyle,
        actionComponent,


        onOpen, onClose,
        disableEnforceFocus = true,
        children, 

        // MDialog:
        dialogStyle,
        width = "100%",
        height="100%",
        ...resetProps
    } = props

    console.log("dialogTitleVisibility-->", dialogTitleVisibility)


    // layout style of dialog:
    const mainBodyStyle = {
        maxWidth: width,
        maxHeight:height,
        ...dialogStyle
    }

    const classes = useStyles()

    return(<>
        <MDialog
         open={true}
         clone={false}
         disableEnforceFocus= ""
         fullWidth
         PaperProps={{sx:mainBodyStyle}}
         aria-labelledby=""
         {...resetProps}

        >
            {/* {dialogTitleVisibility ? (
                <DialogTitle className={classes.dialogTitle} sx={{ ...dialogTitleStyle }}>
                    <Box>{title}</Box>
                    <IconButton onClick={onClose}><Close /></IconButton>
                </DialogTitle>
            ) : null} */}

            
            <DialogContent sx={{...dialogContentStyle}} >
                {contentComponent && contentComponent()}
            </DialogContent>

            <DialogActions sx={{...dialogActionsStyle}} >
                {actionComponent && actionComponent()}
            </DialogActions>
           
        </MDialog>     
    </>)
    
}

const useStyles = makeStyles((theme) =>
    createStyles({

        // DialogTitle style css:
        DialogTitle: {
            display:"flex", justifyContent:"space-between"
        }

    })
)

export default React.memo(Dialog)