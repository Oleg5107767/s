import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
      height: '34px',
      //width: '100px',
      background: '#F4E041',
      border: 'none',
     // borderRadius: '80px',
      textAlign: 'center',
      textTransform: "none",
      fontSize: '16px',
      lineHeight:'26px',
      '&$disabled': {
        color: 'white',
        background: '#B4B4B4',
      },
    },
    disabled: {},
  });

  export default function CustomButton(props) {
    const classes = useStyles();


    const {disabled,className,id,onClick,label, ...other} = props;
    return(
        <>
            <Button 
                className={className}
                variant="contained"
                disabled={disabled } 
                onClick={onClick}
                id={id}
                {...other}
            >
              {label} 
            </Button>  
        </>
    )
}

