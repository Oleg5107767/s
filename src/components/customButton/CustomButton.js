import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';


  export default function CustomButton(props) {

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

