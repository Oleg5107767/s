import React, { useState, useEffect , useCallback, useMemo} from 'react';
import useGoogleService from '../../service/useGoogleService';
import {useDispatch,useSelector} from 'react-redux';
import {changeActiveSheet,  categorysAdd} from '../../actions';
import {Grid, Container }from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';
import Preview from '../../components/preview/Preview';
import BannerAdvertising from '../../components/bannerAdvertising/BannerAdvertising';
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
  
console.log(categorys)

console.log(categorysItems)



  const onRequest =  () => {
    getCategorys("Categorys")
          .then(onCategorysLoaded)
  }
  

 const onCategorysLoaded = (arr) => { 
  setCategoryItem(arr)
  dispatch(categorysAdd(arr))
 }


  const hndleCategory = (e) => {
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
          item xs={4} lg={3}
          key={el.id}
          id={el.id}
          onClick={(e)=> hndleCategory(e)}
        >
            <img 
              src={el.picture} 
              style={{width: '60px'}}
              id={el.id}
            >
            </img>
            <p id={el.id}>{el.name}</p>
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
          <Preview/>
          {spinner}
          {items}
          <BannerAdvertising/>
        </Container>
  )

}
export default Categorys;