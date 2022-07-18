import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useService from '../../service/Service';
import Spinner from '../spinner/Spinner';

import { ItemDetail } from '../itemDetail/ItemDetail';

const CategoryProduct = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [itemId, setItemId] = useState(null);
    const [ openPopup, setOpenPopup ] = useState(false);
    const {getCategory, loading} = useService();
    
    const {sheet} = useSelector(state => state);
console.log(itemId)


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

    const renderCategoryList = (arr) => {
        console.log(arr)
        const items = arr.map(el => {
            return(
                <div
                key={el.id}
                id={el.id}
                style={{border: '1px solid black'}}
                onClick={(e)=> hendleItemId(e)}
            >
                <img 
                    src={el.picture} 
                    style={{width: '60px'}}
                    id={el.id}
                >
                </img>
                <p >{el.name}</p>
                <p >{el.volume}</p>
                <p >{el.price}</p>
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