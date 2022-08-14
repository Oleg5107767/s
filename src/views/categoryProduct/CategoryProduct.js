import React, { useState, useEffect, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useGoogleService from '../../service/useGoogleService';
import Spinner from '../../components/spinner/Spinner';
import  CustomButton  from '../../components/customButton/CustomButton';
import { ItemDetail } from '../../components/itemDetail/ItemDetail';
import { categoryProductArr, joinedCart } from '../../actions';
import {Grid, Container }from '@material-ui/core';
import { CategoryProductStyle } from './CategoryProductStyle'; 





const CategoryProduct = () => {

    const [categoryItem,setCategoryItem] = useState([])
    const [itemId, setItemId] = useState(null);
    const [ openPopup, setOpenPopup ] = useState(false);

    const {getCategory, loading} = useGoogleService();
    const {sheet, categoryProduct} = useSelector(state => state);


    const dispatch = useDispatch();
    const classes = CategoryProductStyle();


    useEffect((sheet) => {
        onRequest(sheet)
    },[sheet])




    const onRequest = (sheet) =>{
        getCategory(sheet)
            .then(transformArr)
            .then(onCategoryListLoaded)
    }


    const transformArr = (arr) => {
        
        arr.map(el => {     
                let count = 0
                el.count = count
                return  el
        })
        return arr
    }
    
    const onCategoryListLoaded = (arr) => {
        setCategoryItem(arr)
        dispatch(categoryProductArr(arr))
    }
  
    
    const hendleItemId = (e) => {
        //записал id чтоб предать в comp Itemdetail
        setItemId(e.target.id)
        setOpenPopup(true)
    }

    const handlecountItem = useCallback((e, event) => {
        let obj = categoryProduct.filter(item => item.id === e.currentTarget.id)[0];
        event === 'add' ? ++obj.count  : --obj.count
        if(obj.count <= 0){
            obj.count = 0
        }
        dispatch(categoryProductArr(categoryProduct))
    })


    const addToCart =  useCallback((e) => {
        let objToCatr = categoryProduct.filter(item => item.id === e.currentTarget.id)[0];
        let tempObj = {...objToCatr}
        dispatch(joinedCart(tempObj))
        objToCatr.count = 0
    })


    //const handleSubgroup = useCallback((e) => {
    //    let tempCategoryItem = categoryProduct.filter(item => item.subgroup === e.currentTarget.id);
    //    console.log(tempCategoryItem)
    //    setCategoryItem([...tempCategoryItem])
    //})

   const handleSubgroup = (e) => {
       e.preventDefault()
       let tempCategoryItem = categoryProduct.filter(item => item.subgroup === e.currentTarget.id)
       setCategoryItem([...tempCategoryItem])
   }
  


    
    const renderCategoryList = (arr) => {

        const items = arr.map(el => {
            return(
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    item xs={4} lg={3}
                    key={el.id}
                    id={el.id}
                    style={{border: '1px solid black'}}
                >
                    <Grid item >
                        <img 
                            src={el.picture} 
                            style={{width: '60px'}}
                            id={el.id}
                            onClick={(e)=> hendleItemId(e)}
                        >
                        </img>
                    </Grid>
                    <Grid 
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item >
                            <p >{el.name}</p>
                        </Grid>
                        <Grid item>
                            <p >{el.volume}</p>
                        </Grid>
                    </Grid>
                    <Grid 
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <span >{el.price}</span>
                        </Grid>
                        <Grid item xs={2}>
                            <CustomButton id={el.id} label={'-'} className={classes.btnCount} onClick={(e) => handlecountItem(e,'-')}/>
                        </Grid>
                        <Grid item xs={1}>
                            <input placeholder={el.count} className={classes.inputCount}/>
                        </Grid>
                        <Grid item xs={2}>
                            <CustomButton id={el.id} label={'+'} className={classes.btnCount} onClick={(e) => handlecountItem(e,'add')} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <CustomButton id={el.id} label={'Buy'} onClick={(e) => addToCart(e)}/>
                    </Grid>
                </Grid>
      )})
    return(
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
        >
          {items}
        </Grid>
    )
      }
    const   updateSubgroupTab = (arr) => {
        let set = new Set(arr.filter(el => sheet === el.selector).map(el => el.subgroup))
       // set.delete('')

        let arrSubgroup = [...set]
        console.log(arrSubgroup)
        return(

                <Grid item>
                    { arrSubgroup.map(el => {
                      return  (el? <button key={el} id={el} onClick={(e) => handleSubgroup(e)}>{el}</button> : null)
                    })}   
                </Grid>
        )
      }

      const items =  renderCategoryList(categoryItem);
      const itemsSubgroup = updateSubgroupTab(categoryProduct); 
      const spinner = loading ? <Spinner/> : null;
      const modal = itemId? <ItemDetail openPopup={openPopup} setOpenPopup={setOpenPopup}item={itemId}categoryProduct={categoryProduct}/>: null
      
    return(
        <Container>
            
            <Grid container>
            
                <Grid item>
                    <Grid 
                        container
                        direction='row'
                        item  lg={12}
                        justifyContent="center"
                        alignItems="center"
                        spacing={4}
                    >
                        {itemsSubgroup} 
                    </Grid>
                    {spinner}
                    {items}
                    {modal}
                </Grid>
            </Grid>    
        </Container>
    )
}

export default CategoryProduct;