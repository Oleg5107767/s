import { makeStyles } from '@material-ui/core/styles';

export const FooterStyle = makeStyles(theme => ({
    block: {
        padding: '10px',
        backgroundColor: '#100f0e',
        color: 'white',
        borderRadius: '10px',
        boxShadow: '1px 1px 10px 5px #100f0e',
        opacity: 0.9,
        textAlign: 'center',
    },
    title: {
        color: '#ffa438',
    },
    img: {
        width: 40,
        height: 35
    }
}));