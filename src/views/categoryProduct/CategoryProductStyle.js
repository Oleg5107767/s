import { makeStyles } from '@material-ui/core/styles';
import circleOrange from '../../assets/svg/uah.svg';



export const CategoryProductStyle = makeStyles((theme) => ({
    containerWrap: {
        width: '100%',
        paddingTop: '40px'
    },
    container: {
        width: 'auto',
        height: 'auto',
        display: 'grid',
        overflow: 'hidden',
        margin: 0,
        listStyle: 'none',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: 15,
        padding: 15,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        background: '#00000070',
        borderRadius: 20
    },
    disabled: {
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    wrapItem: {
        justifyContent: "center",
        alignItems: "center"
    },
    bg: {
        width: 100,
        position: 'relative',
        backgroundPosition: 'center',
        backgroundSize: 105,
        alignContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${"https://drive.google.com/uc?export=view&id=1vspSpAdHUwObSELYpx1Trvt9eh8XKxjm"})`,
    },
    imgCategory: {
        width: '60px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btnCountWrap: {
        display: 'flex',
        justifyContent: ' center',
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
    btnToCart: {
        width: 100,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#FFA438',
        textTransform: 'none',
        padding: '5px 5px 5px 5px',
        justifyContent: 'center',
        marginTop: '10px'
    },
    inputCount: {
        '& .MuiInputBase-root': {
            width: 40,
            height: 25,
            color: 'black',
        },
        backgroundColor: 'white',
        borderRadius: 10,
        pointerEvents: "none",
        textTransform: 'none',
        color: 'black',
    },
    subgroupWrap: {
        display: 'flex',
        justifyContent: ' center',
    },
    subgroup: {
        padding: 5,
        textTransform: 'none',
        border: '1px solid #FFA438',
        borderRadius: 30,
        backgroundColor: '#100f0e',
        color: '#FFA438',
    },
    loremWraper: {
        padding: 10
    },
    loremTitle: {
        color: '#FFA438'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    textAdvertisingBanner: {
        color: 'white',
        textAlign: 'start'
    },
    imgAdvertisingBanner: {
        display: 'flex',
        justifyContent: ' center',
    },
    uah: {
        width: 40,
        alignItems: "center"
    },
    price: {
        alignItems: "center",
        color: 'white',
        alignContent: "center",
        fontSize: 15
    },
    [theme.breakpoints.only('xs')]: {
        container: {
            width: '100%',
            height: 'auto',
            display: 'grid',
            overflow: 'hidden',
            margin: 0,
            listStyle: 'none',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: 5,
            padding: 15,
        },
        btnToCart: {
            marginTop: '10px'
        },
        item: {
            background: '#00000070',
            borderRadius: 20,
            width: '100%'
        },
        disabled: {
            fontSize: 15
        },
    },
    [theme.breakpoints.only('sm')]: {
        disabled: {
            fontSize: 15
        },
    },
    [theme.breakpoints.only('md')]: {
        containerWrap: {
            paddingTop: '60px'
        },
    }
}));
