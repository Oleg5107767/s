import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {  useTheme } from '@material-ui/core/styles';
import CategoryProduct from '../views/categoryProduct/CategoryProduct';
import {changeActiveSheet} from '../actions';
import { withSideBarStyle } from './withSideBarStyle';



 export function withSideBar(BaseComponent, props) {
  return (props) => {
    const { window } = props;
    const { categorys} = useSelector(state => state);
    const dispatch = useDispatch();
   
    const classes = withSideBarStyle();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
  
  const handleChangeCategory = (e) => {
      dispatch(changeActiveSheet(e.currentTarget.id))
  } 
  const drawer = (
    <div>
      {/*<div className={classes.toolbar} />*/}
        <Divider />
          <List>
            {categorys.map((el) => (
              <ListItem button key={el.id} >
              
                <ListItemText primary={el.name} id={el.id} onClick={(e) => handleChangeCategory(e)}/>
            
              </ListItem>
            ))}
          </List>
        <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <CategoryProduct/>
      </main>
    </div>
  )}
}
  

  
