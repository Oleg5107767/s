import { makeStyles } from '@material-ui/core/styles';


export const PaymentDeliveryStyle = makeStyles((theme) => ({
    titleImg:{
        position: 'relative',
        left: 65,
        zIndex: 1,
        opacity: 0.9,
        
    },
    deliveryCarImg:{
        width: 370,
        position: 'relative',
       // right: 120  
    },
    titlePayment:{
        zIndex: 4,
        color: '#FFA438',
        textAlign:'center'
    },
    text: {
        color: 'white',
       // textAlign:'center'
    },
    bottlelImg:{
        color: 'white',
        width: 45,
      },
}))


   