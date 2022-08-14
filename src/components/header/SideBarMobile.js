import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  wrapper:{
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  link: {
    color: ' #FFA438',
    cursor: 'pointer',
    textDecoration: 'none',
   // justifyContent: 'center'
  },
  listItemX: {

      textAlign: 'center',
      justifyContent: 'center'

  }
});

export default function SideBarMobile() {

  const { categorys} = useSelector(state => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor="top", open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

             <ListItem button className={classes.listItemX}>
            <Link  to="/"  className={classes.link} >
              <ListItemText primary={'Главная'}  />
            </Link> 
          </ListItem>
            <ListItem button className={classes.listItemX} >
              <Link  to="/"  className={classes.link} >
                <ListItemText primary={'Оплата и доставка'} style={{color: '#FFA438'}}  />
              </Link> 
            </ListItem>
            <ListItem button className={classes.listItemX}>
              <Link  to="/"  className={classes.link} >
                <ListItemText primary={'Связь'} style={{color: '#FFA438'}}/>
              </Link> 
            </ListItem>
            <ListItem button className={classes.listItemX}>
              <Link  to="/"  className={classes.link} >
                <ListItemText primary={'О нас'} style={{color: '#FFA438'}}/>
              </Link> 
            </ListItem>

         
      </List>
      <Divider />
      <List>
        <ListItemText primary={'Категории'} className={classes.listItemX}/>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
             {categorys.map((el) => (
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                item xs={6} lg={6}
                key={el.id}
              >
              <ListItem button key={el.id} className={classes.listItemX}>
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
          <IconButton onClick={toggleDrawer("top" , true)}>
              <MenuIcon style={{color: '#FFA438'}}/>
            </IconButton>
          <Drawer anchor={"top" } open={state["top"]} onClose={toggleDrawer("top" , false)}>
            {list("top")}
          </Drawer>
    </div>
  );
}
