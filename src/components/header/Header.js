import React, { useState } from "react";
import { AppBar, Toolbar, MenuItem, Badge, Hidden, Box, Typography, Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HeaderStyle } from './HeaderStyle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SideBarBurger from '../sideBarBurger/SideBarBurger';
import Coctail from '../../assets/svg/Coctail.svg'


const Header = () => {

  const { CartAllItems } = useSelector(state => state);
  const classes = HeaderStyle();
  const location = useLocation();

  const viewCartCount = () => {
    let cartTotal = 0;
    CartAllItems.forEach(el => cartTotal = cartTotal + el.count)
    return cartTotal
  }

  return (
    <AppBar position="fixed" color="inherit" className={classes.bgAppBar}>
      <Toolbar>
        <Hidden smDown>
          <Box className={classes.title} >
            <NavLink
              to="/"
              className={location.pathname === "/" ? classes.linkActive : classes.link}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
              >
                <Grid item >
                  <Typography
                    component="h1"
                    variant="h6"
                  >
                    Главная
                  </Typography>
                </Grid>
                {location.pathname === "/" ? <img src={Coctail} alt="Coctail" /> : null}
              </Grid>
            </NavLink>
            <NavLink
              to="/payment"
              className={location.pathname === "/payment" ? classes.linkActive : classes.link}
            >
              <Grid
                item
                container
                direction="row"
                alignItems="center"
              >
                <Typography
                  component="h1"
                  variant="h6"
                >
                  Оплата и доставка
                </Typography>
                {location.pathname === "/payment" ? <img src={Coctail} alt="Coctail" /> : null}
              </Grid>

            </NavLink>
            <NavLink
              to="/contactus"
              className={location.pathname === "/contactus" ? classes.linkActive : classes.link}
            >
              <Grid
                item
                container
                direction="row"
                alignItems="center"
              >
                <Typography
                  component="h1"
                  variant="h6"
                >
                  Связь
                </Typography>
                {location.pathname === "/contactus" ? <img src={Coctail} alt="Coctail" /> : null}
              </Grid>

            </NavLink>
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? classes.linkActive : classes.link}
            >
              <Grid
                item
                container
                direction="row"
                alignItems="center"
              >
                <Typography
                  component="h1"
                  variant="h6"
                >
                  О нас
                </Typography>
                {location.pathname === "/about" ? <img src={Coctail} alt="Coctail" /> : null}
              </Grid>
            </NavLink>
          </Box>
        </Hidden>

        <Hidden mdUp>
          <Box style={{ flexGrow: 1 }}>
            <SideBarBurger />
          </Box>
        </Hidden>

        <MenuItem style={{ overflow: 'visible' }}>
          <Box className={classes.cart}>
            <Link to="/cart" className={classes.link} >
              <Badge
                badgeContent={viewCartCount()}
                color="secondary"
                overlap="rectangular"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <ShoppingCartIcon style={{ color: '#FFA438' }} />
              </Badge>
            </Link>
          </Box>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;