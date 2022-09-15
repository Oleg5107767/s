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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    top: 88,
    left: 15,
    border: '1px solid #FFA438',
    borderRadius: 30,
    boxSizing: 'border-box',
    backgroundColor: '#100f0e',
    '&.MuiDrawer-paper ': {
      height: ' auto',
    }
  },
  bottlelImg: {
    color: '#FFA438',
    width: 45,
  },
  activeCategorys: {
    '& .MuiListItemText-primary': {
      color: 'white'
    },
  },
  text: {
    '& .MuiListItemText-primary': {
      color: '#FFA438'
    },
  },
  wrapAnima: {
    boxSizing: 'border-box'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  [theme.breakpoints.only('xs')]: {
    content: {
      flexGrow: 1,
      width: '100%',
      padding: 0,
    },
  }
}));