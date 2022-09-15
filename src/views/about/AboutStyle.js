import { makeStyles } from '@material-ui/core/styles';


export const AboutStyle = makeStyles((theme) => ({
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
        left: 263,
        zIndex: 1,
        opacity: 0.9,
    },
    [theme.breakpoints.only('xs')]: {
        title: {
            fontWeight: 'bold',
        },
        titleImg: {
            left: 7,
        },
    },
    [theme.breakpoints.only('sm')]: {
        titleImg: {
            left: 'calc(100% - 50px)',
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