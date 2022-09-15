import { makeStyles } from '@material-ui/core/styles';

export const popupStyle = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5),
        border: '2px solid #FFA438',
        borderRadius: 30,
        backgroundColor: '#100f0e',
    },
    btn: {
        width: 10,
        height: 25,
        color: '#FFA438',
        backgroundColor: '#100f0e',
        border: '1px solid #FFA438',
        borderRadius: 30,
        padding: 0,
        minWidth: 29,
        minHeight: 29,
    },
    img: {
        width: 170,
        height: 245,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        transform: ' rotate(10deg)'
    },
    bgImg: {
        width: 225,
        height: 250,
        position: 'relative',
        backgroundPosition: 'center',
        backgroundSize: 330,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundImage: `url(${"https://drive.google.com/uc?export=view&id=1vspSpAdHUwObSELYpx1Trvt9eh8XKxjm"})`,
    },
    title: {
        color: '#FFA438'
    },
    text: {
        color: 'white'
    },
    [theme.breakpoints.only('xs')]: {
        dialogWrapper: {
            top: theme.spacing(1.25),
        },
    }

}));