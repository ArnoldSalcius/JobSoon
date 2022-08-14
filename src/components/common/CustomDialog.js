import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    DialogActions,
} from '@material-ui/core';

const CustomDialog = ({ title, text, children, btnCloseText = 'Cancel', btnSubmitText = 'Submit', disabled, handleSubmit, open, handleClose, ...props }) => {



    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" {...props} >
            <DialogTitle id={`${title}-dialog-title`}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
                {children}

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} style={{ color: 'red' }}>
                    {btnCloseText}
                </Button>
                <Button disabled={disabled} onClick={handleSubmit} color="primary">
                    {btnSubmitText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDialog
