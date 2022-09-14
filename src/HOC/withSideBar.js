import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core/';
import {  useTheme } from '@material-ui/core/styles';
import {changeActiveSheet} from '../actions';
import { withSideBarStyle } from './withSideBarStyle';
import bottle from '../assets/svg/bottle.svg';
import {motion } from 'framer-motion';

 export function withSideBar(BaseComponent, props) {
  return (props) => {
    const { window } = props;
    const {sheet, categorys} = useSelector(state => state);
    console.log(sheet)
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
    <motion.div 
      initial={{ y: -900}}
      animate={{  y: 0}}
      transition={{delay: 1, duration: 1.3 }}       
              >
      {/*<div className={classes.toolbar} />*/}
        <Divider />
          <List>
            {categorys.map((el) => (
              <ListItem button key={el.id} id={el.id} onClick={(e) => handleChangeCategory(e)}>
                <ListItemIcon>
                  {/*<LocalBarIcon className={classes.cocteilImg}/>*/}
                  <img src={bottle} className={classes.bottlelImg}></img>
                </ListItemIcon>
                <ListItemText primary={el.name} id={el.id}  className={el.name === sheet?  classes.activeCategorys : classes.text} />
              </ListItem>
            ))}
          </List>
        <Divider />
    </motion.div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders"
    

      >
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
              keepMounted: true, 
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
       { /*<div className={classes.toolbar} />*/}
          <BaseComponent/>
      </main>
    </div>
  )}
}
  

  
