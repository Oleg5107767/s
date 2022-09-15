import { makeStyles } from '@material-ui/core/styles';

export const CategorysStyle = makeStyles((theme) => ({
  root: {
    margin: '5px'
  },
  itemName: {
    color: ' #FFA438'
  },
  [theme.breakpoints.only('xs')]: {
    itemName: {
      fontSize: '19px',
      fontWeight: 'bold',
    },
  }

}));
