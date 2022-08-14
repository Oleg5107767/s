import React, { useState } from "react";
import {AppBar,Toolbar,MenuItem,Badge,Hidden,Box} from "@material-ui/core";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { HeaderStyle } from './HeaderStyle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SideBarMobile from './SideBarMobile';






const Header = () => {
  const classes = HeaderStyle();
 ;
  //const handleMenu = event => {
  //  setAnchorEl(event.currentTarget);
  //  
  //};
//
  //const handleClose = () => {
  //  setAnchorEl(null);
  //};

  const { CartAllItems} = useSelector(state => state);


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
                <Link  to="/"  className={classes.link} >
                    Главная
                </Link> 
                <h5 style={{color: '#FFA438'}}>Оплата и доставка</h5>
                <h5 style={{color: '#FFA438'}}>Связь</h5>
                <h5 style={{color: '#FFA438'}}>О нас</h5>
            </Box>
        </Hidden>


        



        <Hidden mdUp>
          <Box style={{flexGrow: 1}}>
            <SideBarMobile/>
          </Box>
          {/*  <IconButton
              style={{color: 'white', flexGrow: 1, justifyContent:"flex-start"}}
              //aria-owns={anchorEl ? "simple-menu" : undefined}
              //aria-haspopup="true"
             // color="primary"
              onClick={toggleDrawer('top', true)}
            >
              <MenuIcon />
            </IconButton>*/}
          
          {/*  <StyledMenu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
             // MenuListProps={{ onMouseLeave: handleClose }}
             TransitionComponent={Fade}
             
            >

              <StyledMenuItem onClick={handleClose}  >
                  <Box>
                      <Link  to="/"  className={classes.link} >
                          Главная11111
                      </Link> 
                      <h5 style={{color: 'white'}}>Оплата и доставка</h5>
                      <h5 style={{color: 'white'}}>Связь</h5>
                      <h5 style={{color: 'white'}}>О нас</h5>
                  </Box>
              </StyledMenuItem>

            </StyledMenu>*/}
        </Hidden>
       

            <MenuItem>
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