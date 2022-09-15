import { makeStyles } from '@material-ui/core/styles';


export const ContactUsStyle = makeStyles((theme) => ({
    title: {
        color: '#FFA438',
        textAlign: 'start',
        zIndex: 4,
    },
    text: {
        color: 'white',
        textAlign: 'start'
    },
    titleImg: {
        position: 'relative',
        left: 'calc(100% - 68px)',
        zIndex: 1,
        opacity: 0.9,
    },
    [theme.breakpoints.only('xs')]: {
        title: {
            fontWeight: 'bold',
        },
        titleImg: {
            left: 'calc(100% - 55px)',
        },
    },
    [theme.breakpoints.only('sm')]: {
        titleImg: {
            left: 'calc(100% - 55px)',
        },
        title: {
            fontWeight: 'bold',
        },
    },
    [theme.breakpoints.only('md')]: {
        titleImg: {
            left: 'calc(100% - 60px)',
        },
    }
}))