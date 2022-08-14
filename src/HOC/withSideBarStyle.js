import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

export const withSideBarStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
      top: '135px',
      left: '15px',
      border: '1px solid rgba(0, 0, 0, 0.12)',
      boxSizing: 'border-box',
      backgroundColor: 'black',
      color: 'white',
      '&.MuiDrawer-paper ' :{
          height:' auto',
      }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));