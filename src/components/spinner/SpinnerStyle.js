import { makeStyles } from '@material-ui/core/styles';

export const SpinnerStyles = makeStyles((theme) => ({
    spinnerWrap:{
      padding: '30px 0px 30px 0px'
    },
    spinner: {
        color: '#FFA438',
        animationDuration: '950ms',
      },
      circle: {
        strokeLinecap: 'round',
      },
  }));
