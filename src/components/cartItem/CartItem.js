import React from "react";
import {useSelector} from 'react-redux';


const CartItem = () => {

    const {items} = useSelector(state => state.items);
    console.log(items)
    return(
        <div>
           
        </div>
    )
}
export default CartItem