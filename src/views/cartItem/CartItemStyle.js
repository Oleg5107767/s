import { makeStyles } from '@material-ui/core/styles';

export const CartItemStyle = makeStyles((theme) => ({
    cartItemWrap: {
        border: '2px solid  #FFA438',
        borderRadius: 30
    },
    cartInputCount: {
        backgroundColor: 'white',
        borderRadius: 10,
        pointerEvents:  "none",
        textTransform: 'none',
        '& .MuiInputBase-root':{
            width: 40,
            height: 25,
        },
        '& .MuiInputBase-input':{
           // color: 'black'
        },
    },
    btnCount: {
        width: 10,
        height: 25,
        background: 'inherit',
        borderRadius: 30,
        border: '1px solid white',
        padding: 0,
        minWidth: 24,
        alignContent: 'center',
        
        '& .MuiButton-label': {
            color: 'white',
        }
    },
}))