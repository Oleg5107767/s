import React, { useState, useEffect, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useService from '../../service/Service';
import Spinner from '../spinner/Spinner';
import  CustomButton  from '../customButton/CustomButton';
import { ItemDetail } from '../itemDetail/ItemDetail';
import { categoryItem, joinedCart } from '../../actions';
import {Grid, Container }from '@material-ui/core';
import SideBar from '../sideBar/SideBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CategoryProductStyle } from './CategoryProductStyle'; 





const CategoryProduct = () => {


    const [itemId, setItemId] = useState(null);
    const [ openPopup, setOpenPopup ] = useState(false);


    const {getCategory, loading} = useService();
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
        console.log(arr)
        arr.map(el => {     
                let count = 0
                el.count = count
                return  el
        })
        return arr
    }
    
    const onCategoryListLoaded = (arr) => {
         dispatch(categoryItem(arr))
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
        dispatch(categoryItem(categoryProduct))
    })


    const addToCart =  useCallback((e) => {
        let objToCatr = categoryProduct.filter(item => item.id === e.currentTarget.id)[0];
        let tempObj = {...objToCatr}
        dispatch(joinedCart(tempObj))
        objToCatr.count = 0
    })

  


    
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

      const items =  renderCategoryList(categoryProduct);
      const spinner = loading ? <Spinner/> : null;
      const modal = itemId? <ItemDetail openPopup={openPopup} setOpenPopup={setOpenPopup}item={itemId}categoryProduct={categoryProduct}/>: null
      
    return(
        <Container>
            
            <Grid container>
           
                <Grid item>
                    {spinner}
                    {items}
                    {modal}
                </Grid>
                
                <Grid item>
                    {/*<SideBar/>*/}
                </Grid>
            </Grid>
                    
                    
        </Container>
        
    )
}

export default CategoryProduct;