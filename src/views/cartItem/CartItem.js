import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from "../../components/customButton/CustomButton";
import UserForm from "../../components/userForm/UserForm";
import { changeCart } from '../../actions';
import { Grid, Container, Typography, TextField } from "@material-ui/core";
import { CartItemStyle } from './CartItemStyle'
import uahImg from '../../assets/svg/uah.svg';

const CartItem = () => {

    const { CartAllItems } = useSelector(state => state);
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();
    const classes = CartItemStyle();

    useEffect(() => {
        processing(CartAllItems)
    }, [CartAllItems])

    const processing = (arr) => {
        setCart((cart) => mergeItems(arr))
    }

    const mergeItems = (arr) => {
        const unique = new Map(arr.map(el => [el.id, el]))
        const res = Array.from(unique.values()).map(a => ({ ...a }))
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
        event === 'add' ? ++obj.count : --obj.count
        if (obj.count <= 0) {
            const index = cart.findIndex(item => item.id === obj.id)
            cartArr.splice(index, 1)
        }
        dispatch(changeCart(cartArr))
    }



    const viewTotal = () => {
        let total = 0;
        let sum = cart.map(el => total = total + el.price * el.count)
        return total
    }

    const renderCart = (arr) => {
        const elementCart = arr.map(el => {
            return (
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    key={el.id}
                    id={el.id}
                    style={{
                        marginTop: 10,
                        marginBottom: 10
                    }}
                >
                    <Grid item lg={4} xs={2} md={4}>
                        <img
                            className={classes.cartItemImg}
                            src={el.picture}
                            id={el.id}
                        />
                    </Grid>
                    <Grid
                        lg={4} md={4} xs={7}
                        container
                        direction="row"
                        alignItems="center"
                        className={classes.textContainer}
                    >
                        <Grid item xs={12} lg={12}>
                            <Typography
                                component="h1"
                                variant="h6"
                                className={classes.text}
                            >
                                {el.name} {el.volume}
                            </Typography>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            item
                            className={classes.textContainer}
                        >
                            <img src={uahImg} className={classes.uah}></img>
                            <Typography
                                component="h1"
                                variant="h6"
                                className={classes.text}
                            >
                                {el.price}
                            </Typography>
                        </Grid>

                    </Grid>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        item lg={4} xs={3} md={4}
                        className={classes.cartBtnWrap}
                    >
                        <Grid item xs={12} md={4} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                            <CustomButton id={el.id} label={'-'} onClick={(e) => updateCount(el, 'minus')} className={classes.btnCount} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                            <TextField id="outlined-basic" variant="outlined" placeholder={String(el.count)} className={classes.cartInputCount} />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                            <CustomButton id={el.id} label={'+'} onClick={(e) => updateCount(el, 'add')} className={classes.btnCount} />
                        </Grid>
                    </Grid>
                </Grid>
            )
        })
        return (
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"      
                className={classes.cartItemWrap}
            >
                <Typography
                    component="h1"
                    variant="h6"
                    className={classes.totalTitle}
                >
                    Общая стоимость - {viewTotal()} грн
                </Typography>
                {elementCart}
            </Grid>
        )
    }

    const elements = renderCart(cart);
    return (
        <Container className={classes.cartContainer}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                spacing={4}
            >
                <Grid item lg={7} xs={12}>
                    {elements}
                </Grid>
                <Grid item lg={5} xs={12}>
                    <UserForm />
                </Grid>
            </Grid>
        </Container>
    )
}
export default CartItem;


