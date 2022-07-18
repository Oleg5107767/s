import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useService from '../../service/Service';


import { ItemDetail } from '../itemDetail/ItemDetail';

const CategoryProduct = () => {

    const [categoryList, setCategoryList] = useState(null);
    const [item, setItem] = useState(null);
    const [ openPopup, setOpenPopup ] = useState(false);
    const {getCategory} = useService();
    
    const {sheet} = useSelector(state => state);



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
        setItem(e.target.id)
        setOpenPopup(true)
    }

    return(
        <div>
            {categoryList ? categoryList.map( el => {
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
                    
                )
            } )
            : <h1>sssss</h1>}
            {item? <ItemDetail 
                        openPopup={openPopup} 
                        setOpenPopup={setOpenPopup} 
                        item={item} 
                        categoryList={categoryList}/> : null}
          
        </div>
    )
}

export default CategoryProduct;