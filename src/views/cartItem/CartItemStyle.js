import { makeStyles } from '@material-ui/core/styles';

export const CartItemStyle = makeStyles((theme) => ({
    cartContainer: {
        paddingTop: 125
    },
    cartItemWrap: {
        border: '2px solid  #FFA438',
        borderRadius: 30,
        backgroundColor: '#00000070',
    },
    cartBtnWrap: {
        padding: theme.spacing(4),
        flexDirection: "row",
    },
    cartInputCount: {
        backgroundColor: 'white',
        borderRadius: 10,
        pointerEvents: "none",
        textTransform: 'none',
        '& .MuiInputBase-root': {
            width: 40,
            height: 25,
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
    totalTitle: {
        color: "#ffa438",
        marginTop: "5%",
        marginBottom: "5%",
        textAlign: "center"
    },
    textContainer: {

    },
    text: {
        color: "white"
    },
    uah: {
        width: 40,
    },
    cartItemImg: {
        display: 'block',
        width: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
        '-webkit-filter': 'drop-shadow(0px 0px 15px  #FFA438)',
        filter: 'drop-shadow(0px 0px  15px #FFA438)',
    },
    [theme.breakpoints.only('xs')]: {
        cartContainer: {
            paddingTop: 60
        },
        cartItemWrap: {
            textAlign: "center",
            justifyContent: "center"
        },
        cartBtnWrap: {
            gap: 10,
            padding: theme.spacing(2),
            flexDirection: "column-reverse",
        },
        totalTitle: {
            fontWeight: 'bold',
        },
        textContainer: {
            textAlign: "center",
            justifyContent: "center"
        },
        text: {
            fontSize: '15px',
            textAlign: "center",
            justifyContent: "center"
        },
    },
    [theme.breakpoints.only('sm')]: {
        totalTitle: {
            fontSize: '25px',
            fontWeight: 'bold',
        },
        cartBtnWrap: {
            gap: 10,
            padding: theme.spacing(2),
            flexDirection: "column-reverse",
        },
        textContainer: {
            textAlign: "center",
            justifyContent: "center"
        },
    },
    [theme.breakpoints.only('md')]: {
        cartBtnWrap: {
            gap: 0,
            padding: theme.spacing(2)
        },
        textContainer: {
            textAlign: "center",
            justifyContent: "center"
        },
    }
}))