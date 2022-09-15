import { makeStyles } from '@material-ui/core/styles';


export const UserFormStyle = makeStyles((theme) => ({

    titleForm: {
        zIndex: 4,
        color: '#FFA438',
        textAlign: 'start'
    },
    textForm: {
        color: 'white',
        textAlign: 'center'
    },
    titleFormImg: {
        position: 'relative',
        left: 65,
        zIndex: 1,
        opacity: 0.9
    },
    input: {
        backgroundColor: '#100f0e',
        borderRadius: 10,
        '& .MuiInputBase-input': {
            color: '#FFA438'
        },
        '& .MuiInputBase-root': {
            width: 300,
            height: 30,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(238, 139, 22, 0.6)',
                borderRadius: 10,
            },
            '&:hover fieldset': {
                borderColor: 'rgba(238, 139, 22, 0.6)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFA438',
            },
        },
    },
    inputOutdoors: {
        backgroundColor: '#100f0e',
        borderRadius: 10,
        '& .MuiInputBase-input': {
            color: '#FFA438'
        },
        '& .MuiInputBase-root': {
            width: 240,
            height: 30,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(238, 139, 22, 0.6)',
                borderRadius: 10,
            },
            '&:hover fieldset': {
                borderColor: 'rgba(238, 139, 22, 0.6)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFA438',
            },
        },
    },
    wrapAdress: {
        width: 310,
    },
    inputDomApartment: {
        backgroundColor: '#100f0e',
        borderRadius: 10,
        '& .MuiInputBase-input': {
            color: '#FFA438'
        },
        '& .MuiInputBase-root': {
            width: 55,
            height: 30,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(238, 139, 22, 0.6)',
                borderRadius: 10,
            },
            '&:hover fieldset': {
                borderColor: 'rgba(238, 139, 22, 0.6)',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFA438',
            },
        }
    },
    btnForm: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#FFA438',
        padding: '5px 5px 5px 5px',
        justifyContent: 'center',
    },
    [theme.breakpoints.only('xs')]: {
        titleFormImg: {
            left: 0,
        },
        titleForm: {
            position: 'relative',
            right: 27,
            fontWeight: 'bold',
        },
        textForm: {
            fontSize: '15px',
            fontWeight: 'bold',
            lineHeight: 0.5,
        },
    },
    [theme.breakpoints.only('sm')]: {
        titleFormImg: {
            left: 'calc(100% - 26px)'
        },
        titleForm: {
            position: 'relative',
            left: 35,
            fontWeight: 'bold',
        },
        textForm: {
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: 0.5,
        },
    },
    [theme.breakpoints.only('md')]: {
        titleFormImg: {
            position: 'relative',
            left: 288,
        },
        titleForm: {
            position: 'relative',
            fontWeight: 'bold',
            left: 'calc(100% - 85%)'
        },
    }
}))