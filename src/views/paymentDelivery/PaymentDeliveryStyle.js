import { makeStyles } from '@material-ui/core/styles';


export const PaymentDeliveryStyle = makeStyles((theme) => ({
    titleImg:{
        position: 'relative',
        left: 263,
        zIndex: 1,
        opacity: 0.9,
    },
    deliveryCarImg:{
        width: 370,
        position: 'relative',
        transform:' rotate(-15deg)'
    },
    cashhand:{
        width: 370,
        position: 'relative',
        transform:' rotate(-15deg)'
    },
    titlePayment:{
        zIndex: 4,
        color: '#FFA438',
        textAlign:'start'
    },
    text: {
        color: 'white',
       // textAlign:'center'
    },
    bottlelImg:{
        color: 'white',
        width: 45,
      },
    [theme.breakpoints.only('xs')]: {
        titleImg:{
            left: 17,
        },
        titlePayment:{
            fontWeight: 'bold',
        },
        deliveryCarImg:{
            display: 'none'
        },
        cashhand:{
            display: 'none'
        }
    },
    [theme.breakpoints.only('sm')]: {
        titleImg:{
            left: 70,
        },
        titlePayment:{
            fontWeight: 'bold',
        },
        cashhand:{
            width: 165,
            bottom: 175
        },
        deliveryCarImg:{
            width: 165,
            top:50
        },  
    },
    [theme.breakpoints.only('md')]: {
        titleImg:{
            left: 170,
        },
        titlePayment:{
            textAlign:'center'
        },
        cashhand:{
            width: 220,
            bottom: 95
        },
        deliveryCarImg:{
            width: 215,
            top:80
        },
        
    }
}))


   