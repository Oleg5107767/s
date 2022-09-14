import React from "react";
import { Dialog, DialogContent, DialogContentText,  DialogTitle,  Typography, Button , Grid} from "@material-ui/core";

import { popupStyle } from "./popupStyle";




export default function Popup (props)  {

    const {item,  categoryProduct, openPopup, setOpenPopup ,setItemId} = props;

    let tempItem =  categoryProduct.filter(el => el.id === item);
    const { id, name, picture, description } = tempItem[0];

    const classes = popupStyle();

    const handleClose = (event, reason) => {
        if (reason && reason === "backdropClick"){
            setOpenPopup(false);
            setItemId(null);
        } 
            //return setOpenPopup(false)
           // return () => {setOpenPopup(false); setItemId(null);}
    }

    return(
        
            <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}} onClose={handleClose}>
                <Button 
                        className={classes.btn}
                        onClick={() => {setOpenPopup(false); setItemId(null);}} 
                    >
                        x
                </Button>
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    noWrap
                >
                    <Grid item lg={5}>
                        <DialogContent >
                            <div className={classes.bgImg}>
                                <img 
                                    src={picture} 
                                    className={classes.img}
                                    id={id}
                                ></img>       
                            </div> 
                        </DialogContent>
                    </Grid>
                    <Grid item lg={7} style={{padding: 10}}>
                        <DialogTitle>
                            <div>
                                <Typography variant="h4" component ="div" className={classes.title}>
                                    {name}
                                </Typography>
                            </div>
                        </DialogTitle>
                        <DialogContentText>
                            <Typography variant="h6" component ="div" className={classes.text} >
                                {description}
                            </Typography>
                        </DialogContentText>
                    </Grid>
                </Grid>
            </Dialog>
       
    )
}
