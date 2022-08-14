import  React from 'react';
import {useSelector} from 'react-redux';
import {AppBar, Toolbar, Box, Badge, Menu } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {  useTheme } from '@material-ui/core/styles';
import { HeaderStyle } from './HeaderStyle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import {Hidden, MenuItem} from "@material-ui/core";

const Header123 = () => {
   
    const { CartAllItems} = useSelector(state => state);
    const classes = HeaderStyle();
    const theme = useTheme();

    const viewCartCount = () => {
        let cartTotal = 0;
        CartAllItems.forEach(el => cartTotal = cartTotal + el.count)
        return cartTotal
    }
    const cartTotalItem = viewCartCount()
    
    return(
        <div className={classes.root}>

                <AppBar position="fixed" color="inherit"className={classes.bgAppBar} >
                    <Toolbar className={classes.navigationItem}>
                        <MenuIcon/>
                        <Box className={classes.wrap}>
                            <Link  to="/"  className={classes.link} >
                                Главная
                            </Link> 
                            <h5 style={{color: 'white'}}>Оплата и доставка</h5>
                            <h5 style={{color: 'white'}}>Связь</h5>
                            <h5 style={{color: 'white'}}>О нас</h5>
                        </Box>
                        <Box className={classes.cart}>
                            <Link to="/cart" className={classes.link} >
                                <Badge 
                                    badgeContent={cartTotalItem}
                                    color="secondary"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                      }}
                                >
                                    <ShoppingCartIcon/>
                                </Badge>
                            </Link> 
                        </Box>
                    </Toolbar> 
                </AppBar>  
    </div>
    )
}
export default Header123;