import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useService from '../../service/Service';
import Spinner from '../spinner/Spinner';
import  CustomButton  from '../customButton/CustomButton';
import { ItemDetail } from '../itemDetail/ItemDetail';
import {addItem} from '../cartItem/CartItemSlice';


const CategoryProduct = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [itemId, setItemId] = useState(null);
    const [ openPopup, setOpenPopup ] = useState(false);
    const {getCategory, loading} = useService();
    const {sheet} = useSelector(state => state.sheet);
    const dispatch = useDispatch();
    console.log(sheet, 'product')


    useEffect(() => {
        onRequest()
    },[sheet])

    const onRequest = (sheet) =>{
        getCategory(sheet)
            .then(onCategoryListLoaded)
    }

    const onCategoryListLoaded = (arr) => {
        setCategoryList(arr)
    }

    const hendleItemId = (e) => {
        //записал id чтоб предать в comp Itemdetail
        setItemId(e.target.id)
        setOpenPopup(true)
    }

    const addItemCart = (e) => {
        console.log(e.target.id)
        const itemToCart = categoryList.filter(el => el.id === e.target.id)
       // dispatch(addItem(itemToCart))
       //дописать адд ремув
      //  dispatch(addItem(categoryList.filter(el => el.id === e.target.id)))
   
      dispatch(addItem(itemToCart[0]))
   
    }

    const renderCategoryList = (arr) => {

        const items = arr.map(el => {
            return(
            <div
                key={el.id}
                id={el.id}
                style={{border: '1px solid black'}}
            >
                <img 
                    src={el.picture} 
                    style={{width: '60px'}}
                    id={el.id}
                    onClick={(e)=> hendleItemId(e)}
                >
                </img>
                <p >{el.name}</p>
                <p >{el.volume}</p>
                <p >{el.price}</p>
                <CustomButton id={el.id} children={'-'} />
                <CustomButton id={el.id} children={'+'} onClick={(e) => addItemCart(e)}/>
                <CustomButton id={el.id} children={'Buy'}/>
            </div>
      )})
    return(
        <div>
          {items}
        </div>
    )
      }

      const items =  renderCategoryList(categoryList);
      const spinner = loading ? <Spinner/> : null;
      const modal = itemId? <ItemDetail openPopup={openPopup} setOpenPopup={setOpenPopup}item={itemId}categoryList={categoryList}/>: null
      
    return(
        <div>
            {spinner}
            {items}
            {modal}
        </div>
    )
}

export default CategoryProduct;