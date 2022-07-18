import React,{useState} from 'react';
import { Portal, Button, Grid, Container ,Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CustomPopup from '../components/customPopup/CustomPopup';



 const HocPortal = (Component) => {
   // const classes = useStyles();
  const [ openPopup, setOpenPopup ] = useState(false)
    let WrapprContainer = (props) => {
        return ( 
            
            <CustomPopup
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >

                    <Component {...props}/>

                
            </CustomPopup>

         )
    }
    return WrapprContainer;
}
export default HocPortal;