
import { makeStyles } from '@material-ui/core/styles';

export const BannerPreviewStyle = makeStyles(theme => ({
    root: {
        backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1EWXf3Ja0qk4OiFyj0nfOROscFlAHYm7r)',
        backgroundSize: '100% 567px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: 'auto',
        height: '567px',
    },
    klipartz: {
        width: 300,
        zIndex: 8,
        right: 130,
        position: 'absolute',
    },
    multiImg: {
        top: 82,
        right: 130,
        position: 'absolute',
        backgroundImage: `url(${"https://drive.google.com/uc?export=view&id=1vspSpAdHUwObSELYpx1Trvt9eh8XKxjm"})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 719,
        width: 500,
        height: 450,
    },
    titleWrap: {
        position: 'absolute',
        top: 175,
        left: 205,
        background: '#100f0e',
        textAlign: 'center',
        borderRadius: 70,
        boxShadow: '1px 1px 10px 5px #100f0e',
        opacity: 0.9,
        zIndex: 11,
        boxSizing: 'border-box',
        padding: '10px 30px 10px 30px'
    },
    [theme.breakpoints.only('xs')]: {
        root: {
            width: ' auto',
            backgroundSize: ' 100% 456px',
            height: '406px',
        },
        klipartz: {
            width: 143,
            left: 50,
            bottom: 111
        },
        multiImg: {
            width: 250,
            height: 450,
            margin: 'auto',
            backgroundSize: 362,
            right: 0,
            left: 11,
            top: 58
        },
        titleWrap: {
            top: 100,
            right: 0,
            left: 0,
            padding: '10px 30px 10px 30px',
            '& .MuiTypography-h3 ': {
                fontSize: 23,
                fontWeight: 'bold'
            },
        }
    },
    [theme.breakpoints.only('sm')]: {
        root: {
            width: ' auto',
            backgroundSize: ' 100% 500px',
            height: '430px',
        },
        multiImg: {
            width: 330,
            height: 335,
            margin: 'auto',
            backgroundSize: 500,
            right: 0,
            left: 230,
            top: 85
        },
        klipartz: {
            width: 208,
            left: 112,
            bottom: 10
        },
        titleWrap: {
            top: 155,
            right: 245,
            left: 0,
            padding: 10,
            '& .MuiTypography-h3 ': {
                fontSize: 23,
                fontWeight: 'bold'
            },
        }
    },
    [theme.breakpoints.only('md')]: {
        root: {
            backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1EWXf3Ja0qk4OiFyj0nfOROscFlAHYm7r)',
            backgroundSize: '100% 567px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: 'auto',
            height: '567px',
        },
        multiImg: {
            right: 30,
            height: 475,
        },
        klipartz: {
            width: 300,
            right: 60,
        },
        titleWrap: {
            top: 175,
            left: 35,
            padding: '10px 30px 10px 30px'
        },
    }
}));
