import React,{useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import CustomButton from "../../components/customButton/CustomButton";
import UserForm from "../../components/userForm/UserForm";
import { changeCart} from '../../actions';
import { Grid, Container, Typography, TextField } from "@material-ui/core";
import { CartItemStyle } from './CartItemStyle'
import uahImg from '../../assets/svg/uah.svg';

const CartItem = () => {
    
    const { CartAllItems} = useSelector(state => state);
    const [cart, setCart] = useState([]);

    const dispatch = useDispatch();
    const classes = CartItemStyle();
    

    useEffect(() => {
        processing(CartAllItems)
    },[CartAllItems])

   

    const  processing = (arr) => {
        setCart((cart) => mergeItems(arr))
    }

    //const mergeItems = (arr) => {
    //    const unique = new Map(arr.map(el => [el.id, el])).values()
    //    const tempArr = []
    //    unique.forEach((el) => tempArr.push(el))
    //    const res  = tempArr.map(a => {return {...a}})
    //    const items = res.map(el => {
    //      let count = 0
    //      arr.map(e => e.id === el.id ? count = count + e.count : null)
    //      el.count = count
    //      return el
    //    })
    //    return items
    //  }


const mergeItems = (arr) => {
    const unique = new Map(arr.map(el => [el.id, el]))
    const res  = Array.from(unique.values()).map(a => ({...a}))
    const items = res.map(el => {
      let count = 0
      arr.map(e => e.id === el.id ? count = count + e.count : null)
      el.count = count
      return el
    })
    return items
  }

    const updateCount = (el, event) => {
        
        const cartArr = cart
        let obj = cartArr.filter(item => item.id === el.id)[0]
        event === 'add' ? ++obj.count: --obj.count
        if(obj.count <= 0){
            const index = cart.findIndex(item => item.id === obj.id)
            cartArr.splice(index, 1)
        }  
        dispatch(changeCart(cartArr))
      }


////////////////////////вынести тотал в хелпер что б не дублировать
    const viewTotal = () =>{

        let total =0;
        let sum = cart.map(el => total = total + el.price * el.count)
        return total
    }


      
    const renderCart = (arr) => {
        console.log(arr, 'sfasfsdf')
        const elementCart = arr.map(el => {
            return(
                <Grid 
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems= "center"
                    key={el.id}
                    id={el.id}
                    style={{ marginTop:10,
                        marginBottom: 10}}
                >
                    <Grid item lg={4}>
                        <img 
                            className={classes.cartItemImg}
                            src={el.picture} 
                            style={{width: '60px'}}
                            id={el.id}
                        />
                    </Grid>
                    <Grid
                        lg={4}
                        container
                        direction="column"
                        //justifyContent="flex-star"
                        //alignItems= "center"
                        //textAlign="left"
                    >
                        <Grid item >
                            <Typography 
                                component="h1"
                                variant="h6"
                                style={{color: "white", }}
                            >
                                {el.name} {el.volume}
                            </Typography>
                        </Grid>
   
                        <Grid 
                            container
                            direction="row"
                           // justifyContent="center"
                            alignItems= "center"
                            item
                         >
                            <img src={uahImg} className={classes.uah}></img>
                            <Typography 
                                component="h1"
                                variant="h6"
                                style={{color: "white"}}
                            >
                                {el.price} 
                            </Typography>
                        </Grid>
                    
                    </Grid>
                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="center"
                        alignItems= "center"
                        item lg={4} 
                        spacing={4}
                    >
                        <Grid item>
                            <CustomButton id={el.id} label={'-'} onClick={(e )=> updateCount(el,'minus')} className={classes.btnCount}/>
                        </Grid>
                        <Grid item>
                            <TextField id="outlined-basic" variant="outlined" placeholder={String(el.count)}className={classes.cartInputCount}/>
                        </Grid>
                        <Grid item>
                            <CustomButton id={el.id} label={'+'} onClick={(e )=> updateCount(el,'add')} className={classes.btnCount}/> 
                        </Grid>

                    </Grid>
                </Grid>
            )
        })
        return(
            <Grid 
                container
                direction="column"
                justifyContent="center"
                alignItems= "center"      ///"flex-start"
                className={classes.cartItemWrap}
                
            >
                <Typography 
                    component="h1"
                    variant="h6"
                   style={{color: "#ffa438", marginTop: "5%",marginBottom: "5%",textAlign:"center"}}
                   
                >
                    Общая стоимость - {viewTotal()} грн
                </Typography>
                {elementCart}
            </Grid>
        )
    }
       
    const elements =  renderCart(cart);

    return(
        <Container  style={{paddingTop: 125}}>
            <Grid
                container
                direction="row"
                justifyContent="center"
               // alignItems="center"
                spacing={4}
            >
                <Grid item xs={7}>
                    {elements}
                </Grid> 
                <Grid item xs={5}>
                    <UserForm/>
                </Grid>
            </Grid>

        </Container>
     
    )
}
export default CartItem;


