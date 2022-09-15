import { makeStyles } from '@material-ui/core/styles';

export const SideBarBurgerStyle = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
    backgroundColor: 'black'
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  link: {
    color: ' white',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  listItem: {
    color: ' #FFA438',
    textAlign: 'center',
    justifyContent: 'center'
  }
}));