import React from 'react'
import MDialog from '@mui/material/Dialog'
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'

const Dialog = ({ 
    open, 
    onClose, 
    children,
    title, 
    content, 
    actions,
    dialogTitleSx,
    dialogContentSx,
    dialogActionsSx,
    ...restProps
}) => {
  return (
    <MDialog
      open={open}
      onClose={onClose}
      aria-labelledby="draggable-dialog-title"
      BackdropProps={{ style: { backgroundColor: 'transparent' } }}
      disableScrollLock // Disable scroll lock
      {...restProps}
    >
      <DialogTitle id="draggable-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {content || children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions}
      </DialogActions>
    </MDialog>
  )
}

Dialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    actions: PropTypes.node,
  };

export default Dialog




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
