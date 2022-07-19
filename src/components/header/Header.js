import  React from 'react';
import {AppBar, Toolbar, Box } from '@material-ui/core';
import {Link, NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';



import {changeSheet, clearSheet, saveObjs} from '../categoryProduct/CategoryProductSlice';

const Header = () => {
   
    const dispatch = useDispatch();

    return(
        <AppBar position="absolute" color="inherit" >
        <Toolbar>
            <Link  to="/" >
                Главная
            </Link> 
            <NavLink to="/cart">
                Корзина
            </NavLink> 
        </Toolbar> 
    </AppBar>  

    )
}
export default Header;