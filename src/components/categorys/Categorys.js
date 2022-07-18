import React, { useState, useEffect } from 'react';
import useService from '../../service/Service';
import {useDispatch, useSelector} from 'react-redux';
import {changeSheet} from '../../actions';
import {useNavigate} from 'react-router-dom'


const Categorys = () => {
   
  const [categorys, setCategorys ]= useState([])

  const {getAllCategorys} = useService();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
      onRequest()
  },[])

  const onRequest = () =>{
      getAllCategorys()
          .then(onCategorysLoaded)
  }


  const onCategorysLoaded =  (arr) => {  
    setCategorys([...arr])
  }


  const hndleCategory = (e) => {
      dispatch(changeSheet(e.target.id))
    ////redirect на КатегориПродукт
      navigate("/category") 
  }

  return (
        <div>
           {categorys.map(el => {
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
            )
           })}
        </div>
  )

}
export default Categorys;