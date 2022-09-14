import React, { useState, useEffect } from 'react';
import useGoogleService from '../../service/useGoogleService';
import {useDispatch,useSelector} from 'react-redux';
import {changeActiveSheet,  categorysAdd} from '../../actions';
import {Grid, Container,Typography }from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';
import BannerPreview from '../../components/bannerPreview/BannerPreview';
import BannerBenefits from '../../components/bannerBenefits/BannerBenefits';
import { CategorysStyle } from './CategorysStyle';






const Categorys = () => {
   
  
  const {getCategorys, loading} = useGoogleService();
  

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const classes = CategorysStyle();
  const {sheet, categorys} = useSelector(state => state);
  const [categorysItems, setCategoryItem] = useState([])
  useEffect(() => { 
    onRequest();
  },[sheet])
  
//console.log(categorys)

//console.log(categorysItems)



  const onRequest =  () => {
    getCategorys("Categorys")
          .then(onCategorysLoaded)
  }
  

 const onCategorysLoaded = (arr) => { 
  setCategoryItem(arr)
  dispatch(categorysAdd(arr))
 }


  const handleCategory = (e) => {
      dispatch(changeActiveSheet(e.target.id))

    ////redirect на КатегориПродукт
      navigate("/category") 
  }

  const renderCategorys = (arr) => {

    const items = arr.map(el => {
      return(
        <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          item xs={6} md={4} lg={3}
          key={el.id}
          id={el.id}
        >
            <img 
              src={el.picture} 
              style={{width: '60px'}}
              id={el.id}
              onClick={(e)=> handleCategory(e)}
            >
            </img>
            <Typography 
              className={classes.itemName}
              component="h1"
              variant="h6"
              id={el.id}
              onClick={(e)=> handleCategory(e)}
            >
              {el.name}
            </Typography>
        </Grid>
      )})

    return(
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          
        >
          {items}
        </Grid>
    )
  }

  const items =  renderCategorys(categorysItems);
  const spinner = loading ? <Spinner/> : null;
  
  return (
        <Container  disableGutters maxWidth={false} style={{paddingBottom: 10}}>
          <BannerPreview/>
          {spinner}
          {items}
          <BannerBenefits/>
        </Container>
  )

}
export default Categorys;