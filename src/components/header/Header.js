import React, { useState } from "react";
import {AppBar,Toolbar,MenuItem,Badge,Hidden,Box, Typography, Grid} from "@material-ui/core";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { HeaderStyle } from './HeaderStyle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SideBarBurger from '../sideBarBurger/SideBarBurger';
import Coctail from '../../assets/svg/Coctail.svg'





const Header = () => {

  const { CartAllItems} = useSelector(state => state);
  const classes = HeaderStyle();

    const viewCartCount = () => {
        let cartTotal = 0;
        CartAllItems.forEach(el => cartTotal = cartTotal + el.count)
        return cartTotal
    }
    const cartTotalItem = viewCartCount()

  return (
    
    <AppBar position="fixed" color="inherit"className={classes.bgAppBar}>
      <Toolbar>
        <Hidden smDown>
            <Box className={classes.title} >
                <Link  to="/"  className={classes.link} style={{whiteSpace: 'nowrap'}}>
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography 
                            component="h1"
                            variant="h6"
                        >
                            Главная
                        </Typography>
                    </Grid>
                    <Grid item>
                      <img src={Coctail} alt="Coctail"   />
                    </Grid>
                  </Grid>
                </Link> 
                <Link  to="/payment"  className={classes.link} >
                  <Typography 
                    component="h1"
                    variant="h6"
                  >
                    Оплата и доставка
                  </Typography>
                </Link>
                <Link  to="/"  className={classes.link} >
                  <Typography 
                    component="h1"
                    variant="h6"
                  >
                    Связь
                  </Typography>
                </Link> 
                <Link  to="/"  className={classes.link} >
                  <Typography 
                    component="h1"
                    variant="h6"
                  >
                    О нас
                  </Typography>
                </Link>  
            </Box>
        </Hidden>

        <Hidden mdUp>
          <Box style={{flexGrow: 1}}>
            <SideBarBurger/>
          </Box>
        </Hidden>
       
            <MenuItem style={{overflow:'visible'}}>
                <Box className={classes.cart}>
                    <Link to="/cart" className={classes.link} >
                        <Badge 
                            badgeContent={cartTotalItem}
                            color="secondary"
                            overlap="rectangular"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                              }}
                        >
                            <ShoppingCartIcon/>
                        </Badge>
                    </Link> 
                </Box>
            </MenuItem>
      </Toolbar>
    </AppBar>

  );
};

export default Header;