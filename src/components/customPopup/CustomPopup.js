import React from "react";
import { Dialog, DialogContent, DialogContentText,  DialogTitle,  Typography, Button } from "@material-ui/core";
import { CustomPopupStyle } from "./CustomPopupStyle";





export default function CustomPopup (props)  {

    const { title, contentText, children, openPopup, setOpenPopup } = props;
    const classes = CustomPopupStyle();

    const handleClose = (event, reason) => {
        if (reason && reason == "backdropClick") 
            return setOpenPopup(false)
    }
    return(
        <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}} onClose={handleClose}>
            <DialogTitle>
                <div>
                    <Typography variant="h4" component ="div">
                        {title}
                    </Typography>
                </div>
                <Button 
                    onClick={() => setOpenPopup(false)}
                    color="secondary" 
                >
                    X
                </Button>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogContentText>
                <Typography variant="h6" component ="div">
                    {contentText}
                </Typography>
            </DialogContentText>
        </Dialog>
    )
}
