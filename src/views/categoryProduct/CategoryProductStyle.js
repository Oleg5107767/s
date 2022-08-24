import { makeStyles } from '@material-ui/core/styles';
import circleOrange from '../../assets/svg/uah.svg';



export const CategoryProductStyle = makeStyles((theme) => ({
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
        //background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        justifyContent:"center",
        alignItems:"center",
      },
      
      item: {
        background: '#00000070',
        borderRadius: 20
      },
      
    wrapItem: {
        justifyContent:"center",
        alignItems:"center"
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
    imgCategory:{
        width: '60px', 
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
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

    },
    inputCount: {
        '& .MuiInputBase-root':{
            width: 40,
            height: 25,
        },
        '& .MuiInputBase-input':{
           // color: 'black'
        },
        backgroundColor: 'white',
        borderRadius: 10,
        pointerEvents:  "none",
        textTransform: 'none',
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
      //  marginTop: 50,
        padding: 10
    },
    loremTitle:{
        color: '#FFA438'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    uah: {
        width: 40,
        alignItems:"center"
    },
    price: {
        alignItems:"center",
        color: 'white',
        alignContent:"center",
        fontSize: 15
    }
  
  }));
