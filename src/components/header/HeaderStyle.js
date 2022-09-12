import { makeStyles} from '@material-ui/core/styles';
import {Menu,MenuItem} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";



export const HeaderStyle = makeStyles(theme => ({

    title: {
      flexGrow: 1,
      display: "flex" ,
        flexWrap: "nowrap",
        gap: '22px',
        alignItems: "center",
        justifyContent: "center",
    },
      link: {
        color: '#FFA438',
        cursor: 'pointer',
        textDecoration: 'none',
      },
      cart: {
          display:"flex",
          justifyContent:"flex-end",
          alignItems:"center",
          flexGrow: 1,
      },
      bgAppBar: {
          backgroundColor: 'inherit',
          boxShadow: 'none'
      },

  
  }));

    export const StyledMenu = withStyles({
      paper: {
        border: '1px solid #d3d4d5',
        borderRadius: '25px',
        width: '560px',
      },
    })((props) => (
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        {...props}
      />
    ));

 export const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
        justifyContent: 'center',
      },

    },
  }))(MenuItem);
  