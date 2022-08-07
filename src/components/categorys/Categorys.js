import React, { useState, useEffect , useCallback, useMemo} from 'react';
import useService from '../../service/Service';
import {useDispatch,useSelector} from 'react-redux';
import {changeActiveSheet,  categorysAdd} from '../../actions';
import {Grid, Container }from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import { CategorysStyle } from './CategorysStyle';





const Categorys = () => {
   
  const [categorys, setCategorys ]= useState([])
  const {getCategory, loading} = useService();

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const classes = CategorysStyle();
  const {sheet, categoryProduct} = useSelector(state => state);

  useEffect(() => {
    onRequest();
  },[])
   
  const  sheetCategorys = useMemo(() => dispatch(changeActiveSheet('Categorys')), [sheet]);


  const onRequest =  () => {
    getCategory()
          .then(onCategorysLoaded)
  }


 const onCategorysLoaded = (arr) => { 
  console.log(arr)
  setCategorys([...arr])
  dispatch(categorysAdd(arr))
 }


  const hndleCategory = (e) => {
      dispatch(changeActiveSheet(e.target.id))
      console.log(e.target.id)
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
          spacing={4}
        >
          {items}
        </Grid>
    )
  }

  const items =  renderCategorys(categorys);
  const spinner = loading ? <Spinner/> : null;
  
  return (
        <Container spacing={4}>
          {spinner}
          {items}
        </Container>
  )

}
export default Categorys;