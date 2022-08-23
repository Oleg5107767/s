import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useGoogleService from '../../service/useGoogleService';
import Spinner from '../../components/spinner/Spinner';
import  CustomButton  from '../../components/customButton/CustomButton';
import { ItemDetail } from '../../components/itemDetail/ItemDetail';
import { categoryProductArr, joinedCart } from '../../actions';
import {Grid, Container, Typography, TextField}from '@material-ui/core';
import { withSideBar } from '../../HOC/withSideBar';
import { CategoryProductStyle } from './CategoryProductStyle'; 
import deliveryCarImg from '../../assets/svg/delivery.svg';
import uahImg from '../../assets/svg/uah.svg';
//import circleOrange from '../../assets/svg/circleOrange.svg';
import {motion } from 'framer-motion';

const CategoryProduct = () => {

    const [categoryItem,setCategoryItem] = useState([])
    const [itemId, setItemId] = useState(null);
    const [ openPopup, setOpenPopup ] = useState(false);

    const {getCategory, loading} = useGoogleService();
    const {sheet, categoryProduct} = useSelector(state => state);


    const dispatch = useDispatch();
    const classes = CategoryProductStyle();


    useEffect(() => {

        onRequest()
    },[sheet])




    const onRequest = () =>{

        getCategory()
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



    const handlecountItem = (e, event) => {

        e.preventDefault()
        let obj = categoryProduct.filter(item => item.id === e.currentTarget.id)[0];
        event === 'add' ? ++obj.count  : --obj.count

        if(obj.count <= 0){
            obj.count = 0
        }
        dispatch(categoryProductArr(categoryProduct))
    }


   const addToCart = (e) => {

       e.preventDefault()
       let objToCatr = categoryProduct.filter(item => item.id === e.currentTarget.id)[0];
       let tempObj = {...objToCatr}
       dispatch(joinedCart(tempObj))
       objToCatr.count = 0
   }

   const handleSubgroup = (e) => {

       e.preventDefault()
       let tempCategoryItem = categoryProduct.filter(item => item.subgroup === e.currentTarget.id)
       setCategoryItem([...tempCategoryItem])
   }
   const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
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
                    style={{ padding: 20}}
                    
                >
                    
                    <Grid item >
                        <div className={classes.bg}>
                            <motion.img 
                                src={el.picture} 
                                id={el.id}
                                className={classes.imgCategory}
                                onClick={(e)=> hendleItemId(e)}
                                initial={{ opacity: 0}}
                                animate={{  opacity: 1}}
                                transition={{delay: 1, duration: 1.3 }}
                            >
                            </motion.img>
                        </div>
                    </Grid>
                    

                    
                    <Grid 
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        alignContent='center'
                    >

                        <Grid item >
                            <Typography 
                                component="h1"
                                variant="h6"
                                className={classes.text}
                               
                            >
                                {el.name} {el.volume}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid 
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={4}
                    >
                      
                        <Grid item lg={5} >
                            <Grid 
                                container
                                direction='row'
                                justifyContent="center"
                                alignItems='center'
                            >
                                <Grid item lg={6} >
                                    <img src={uahImg} className={classes.uah}></img>
                                </Grid>
                                <Grid item lg={5} >
                                    <Typography 
                                        component="h1"
                                        variant="h6"
                                        className={classes.price}
                                    >
                                        {el.price}грн
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item lg={2}>
                            <CustomButton id={el.id} label={'-'} className={classes.btnCount} onClick={(e) => handlecountItem(e,'-')}/>
                        </Grid>
                        <Grid item lg={3} >
                        <TextField id="outlined-basic" variant="outlined" placeholder={String(el.count)}className={classes.inputCount}/>
                            {/*<input placeholder={el.count} className={classes.inputCount}/>*/}
                        </Grid>
                        <Grid item lg={2}>
                            <CustomButton id={el.id} label={'+'} className={classes.btnCount} onClick={(e) => handlecountItem(e,'add')} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <CustomButton id={el.id} label={'В корзину'}className={classes.btnToCart} onClick={(e) => addToCart(e)}/>
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
    const  updateSubgroupTab = (arr) => {

        let set = new Set(arr.filter(el => sheet === el.selector).map(el => el.subgroup))
       // set.delete('')
        let arrSubgroup = [...set]

        return(
                <Grid 
                    container
                    direction='row'
                    item  lg={12}
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                    { arrSubgroup.map(el => {
                      return  (el ? 
                                    <Grid item key={el} style={{boxSizing: 'border-box'}}>
                                        <CustomButton 
                                            id={el} 
                                            onClick={(e) => handleSubgroup(e)}
                                            className={classes.subgroup}
                                            label={el}
                                        />
                                    </Grid>
                                : null)
                    })}
                </Grid>   
        )
      }
    
    const renderAdvertisingBanner = () => {
        
        return(
            <Grid 
                container
                direction='row'
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <img src={deliveryCarImg}/>
                </Grid> 
                <Grid item>
                    <Typography 
                        component="h1"
                        variant="h6"
                        className={classes.text}
                    >
                        Быстрая доставка напитков в ночное время!
                    </Typography>
                </Grid> 
            </Grid>
        )
    }
    const renderLorem = () => {
        
      if(categoryProduct[0]){

        return (
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.loremWraper}
                spacing={4}
            >
                <Grid item>
                    <Typography 
                        component="h1"
                        variant="h5"
                        className={classes.loremTitle}
                    >
                        Доставка - {sheet}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography 
                        component="h1"
                        variant="h6"
                        className={classes.text}
                    >
                        {categoryProduct[0].lorem}
                    </Typography>
                </Grid>
            </Grid>
        )
      }
    }
       
    const items =  renderCategoryList(categoryItem);
    const itemsSubgroup = updateSubgroupTab(categoryProduct); 
    const advertisingBanner = renderAdvertisingBanner();
    const  loremText = renderLorem();
    const spinner = loading ? <Spinner/> : null;
    const modal = itemId? <ItemDetail openPopup={openPopup} setOpenPopup={setOpenPopup}item={itemId}categoryProduct={categoryProduct}/>: null
      
    return(
        <Container>
            
            <Grid 
                container
                direction='column'
                spacing={4}
            >
                <Grid item >
                    {advertisingBanner} 
                </Grid>
                <Grid item>
                    {itemsSubgroup} 
                </Grid>
                <Grid item>
                    {spinner}
                    {items}
                    {modal}
                </Grid>
                <Grid item>
                    {loremText}
                </Grid>
            </Grid>    
        </Container>
    )
}

export default withSideBar(CategoryProduct);