import React, { memo } from "react";
import { Dialog as MDialog, DialogTitle, IconButton, Paper, DialogContent, DialogActions } from "@mui/material";
import { Close, Height, Margin, Widgets } from "@mui/icons-material";
import {makeStyles, createStyles} from "@mui/styles";
import Stack from "./Stack";

const Dialog = (props) =>{
    const  {
        title, 
        onOpen, onClose,
        contentComponent, actionComponent,
        disableEnforceFocus = true,
        children, 
        width = "100%",
        height="100%",
        ...resetProps
    } = props
    console.log("--->", props)

    // layout style of dialog:
    const dialogStyle = {
        maxWidth: width,
        maxHeight:height,

    }

    const classes = useStyles()

    return(<>
        <MDialog
         open={true}
         clone={false}
         disableEnforceFocus= "1"
         fullWidth
         PaperProps={{sx:dialogStyle}}
         aria-labelledby=""
         {...resetProps}
        >
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

            <DialogContent>
                {contentComponent && contentComponent()}
            </DialogContent>

            <DialogActions>

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