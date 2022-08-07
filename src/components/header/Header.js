import  React from 'react';
import {AppBar, Toolbar, Box } from '@material-ui/core';
import {Link, NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';

import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        
      },
    navigationItem: {
        alignItems: 'center',
        justifyContent:'center',
    },
    bgAppBar: {
        backgroundColor: 'black'
    }
}));


const Header = () => {
   
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    return(
        <div className={classes.root}>

                <AppBar position="fixed" color="inherit"className={classes.bgAppBar} >
                <Toolbar className={classes.navigationItem}>
                    <Link  to="/" style={{color: 'white'}}>
                        Главная
                    </Link> 
                    <NavLink to="/cart" style={{color: 'white'}}>
                        Корзина
                    </NavLink> 
                </Toolbar> 
                </AppBar>  
    </div>
    )
}
export default Header;