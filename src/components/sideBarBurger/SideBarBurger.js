import React,{useState} from 'react';
import clsx from 'clsx';
import {Drawer, IconButton, Grid} from '@material-ui/core/';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Menu as MenuIcon} from "@material-ui/icons";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {changeActiveSheet} from '../../actions';
import {useNavigate} from 'react-router-dom';
import { SideBarBurgerStyle } from './SideBarBurgerStyle';



export default function SideBarBurger() {

  const { categorys} = useSelector(state => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const classes = SideBarBurgerStyle();
  const[ openBar, setOpenBar ] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
   
    setOpenBar(open)
    
  };
  
  const handleChangeCategory = (e) => {
    dispatch(changeActiveSheet(e.currentTarget.id))
    navigate("/category")
} 
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" ,
      })}
      role="presentation"
      onClick={toggleDrawer( false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>

             <ListItem button className={classes.listItem}>
            <Link  to="/"  className={classes.link} >
              <ListItemText primary={'Главная'}  />
            </Link> 
          </ListItem>
            <ListItem button className={classes.listItem} >
              <Link  to="/"  className={classes.link} >
                <ListItemText primary={'Оплата и доставка'}   />
              </Link> 
            </ListItem>
            <ListItem button className={classes.listItem}>
              <Link  to="/"  className={classes.link} >
                <ListItemText primary={'Связь'} />
              </Link> 
            </ListItem>
            <ListItem button className={classes.listItem}>
              <Link  to="/"  className={classes.link} >
                <ListItemText primary={'О нас'} />
              </Link> 
            </ListItem>

         
      </List>
      <Divider />
      <List>
        <ListItemText primary={'Категории'} style={{ color: "white", textAlign: 'center'}}/>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
             {categorys.map((el) => (
              <Grid
                item xs={6} lg={6}
                key={el.id}
              >
              <ListItem button key={el.id} className={classes.listItem}>
                <ListItemText 
                  primary={el.name} 
                  id={el.id} 
                  onClick={(e) => handleChangeCategory(e)}
              />
              </ListItem>
              </Grid>
            ))}
            </Grid>
      </List>
    </div>
  );

  return (
    <div>
          <IconButton onClick={toggleDrawer( true)}>
              <MenuIcon style={{color: '#FFA438'}}/>
            </IconButton>
          <Drawer anchor="top" open={openBar}  onClose={toggleDrawer( false)}>
            {list("top")}
          </Drawer>
    </div>
  );
}