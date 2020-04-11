import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import PropTypes from 'prop-types';

export const CustomDialog = ({
  isOpen,
  handleClose,
  handleSave,
  title,
  subtitle,
  children
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={isOpen}
      onClose={handleClose}
      arial-labelledby='dialog-title'
      disableBackdropClick>
        <DialogTitle id='dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
          <Button onClick={handleSave} color="primary">Save</Button>
        </DialogActions>
    </Dialog>
  )
}

CustomDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.element.isRequired
}
