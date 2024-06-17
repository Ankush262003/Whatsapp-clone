import React from "react";
import MDialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "./Button";

const Dialog = ({
  open,
  onClose,
  children,
  title,
  content, // pass content in string
  actionButtonText, // pass if want single button
  actionButtonSx, // style of button
  actions, // pass ui if want custom Action
  dialogTitleSx, // pass style only for Title
  dialogContentSx, // pass style only for Content
  dialogActionsSx, // pass style only for Action
  dialogContentTextSx, // pass style only for Content text
  ...restProps
}) => {
  const actionButton = () => {
    if (actionButtonText) {
      return (
        <>
          <Button onClick={onClose} sx={actionButtonSx}>
            {actionButtonText}
          </Button>
        </>
      );
    } else {
      return actions;
    }
  };

  return (
    <MDialog
      open={open}
      onClose={onClose}
      aria-labelledby="draggable-dialog-title"
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
      // disableScrollLock // Disable scroll lock
      sx={{}}
      {...restProps}
    >
      <DialogTitle id="draggable-dialog-title" sx={dialogTitleSx}>
        {title}
      </DialogTitle>
      <DialogContent sx={dialogContentSx}>
        <DialogContentText sx={dialogContentTextSx}>
          {content || children}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={dialogActionsSx}>{actionButton()}</DialogActions>
    </MDialog>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  actions: PropTypes.node,
  actionButtonText: PropTypes.string,
};

export default Dialog;

// Note:

// pass action like that:
// actions={
//     <>
//       <Button onClick={handleClose} color="primary">
//         Cancel
//       </Button>
//       <Button onClick={handleClose} color="primary">
//         Subscribe
//       </Button>
//     </>
//   }
