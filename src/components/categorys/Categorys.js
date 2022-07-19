import React, { useState, useEffect , useCallback} from 'react';
import useService from '../../service/Service';
import {useDispatch, useSelector} from 'react-redux';
import {changeSheet, clearSheet, saveObjs} from '../categoryProduct/CategoryProductSlice';
import {useNavigate} from 'react-router-dom'
import Spinner from '../spinner/Spinner';

const Categorys = () => {
   
  const [categorys, setCategorys ]= useState([])


  const {getCategory, loading} = useService();
  const {sheet, activeCategorys} = useSelector(state => state.sheet);
  const dispatch = useDispatch();
  let navigate = useNavigate();



  useEffect(() => {
    onRequest();
    return () => {
      dispatch(clearSheet())
    }   
  },[])




  const onRequest =  () => {
     getCategory()
          .then(onCategorysLoaded)
  }


  const onCategorysLoaded = (arr) => { 
    setCategorys([...arr])
    dispatch(saveObjs(arr))
  }


  const hndleCategory = (e) => {
      dispatch(changeSheet(e.target.id))
      console.log(e.target.id)
    ////redirect на КатегориПродукт
      navigate("/category") 
  }

  const renderCategorys = (arr) => {

    const items = arr.map(el => {
      return(
        <div 
          key={el.id}
          id={el.id}
          onClick={(e)=> hndleCategory(e)}
          style={{border: '1px solid black'}}
        >
          <img 
            src={el.picture} 
            style={{width: '60px'}}
            id={el.id}
          >
          </img>
          <p id={el.id}>{el.name}</p>
        </div>
      )})
    return(
        <div>
          {items}
        </div>
    )
  }

  const items =  renderCategorys(categorys);
  const spinner = loading ? <Spinner/> : null;
  
  return (
        <div>
          {spinner}
          {items}
        </div>
  )

}
export default Categorys;