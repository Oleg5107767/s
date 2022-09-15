import React,{useState} from "react";
import {useSelector} from 'react-redux';




export  function useForm(initialValue, validateOnChange= false){

    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [disabledForm, setDisabledForm] = useState(true);
    const { CartAllItems} = useSelector(state => state);


    const handleChange = (e) => {

        const {name,value} = e.target;
 
        setValues({
            ...values,
            [name]: value,
           
        })
        if(validateOnChange)
       validate({[name]: value})
     }

     const validate = (nameValues = values) => {

        let temp = {...errors}

        if("name" in nameValues)
            temp.name =  nameValues.name.length < 2 ? 'Not enough symbols': '' || nameValues.name.length > 60 ? 'Many symbols': '';
        if("phone" in nameValues)
            temp.phone = (/^[\+]{0,1}380([0-9]{9})$/).test(nameValues.phone) ? '': '+38 (XXX) XXX - XX - XX';
        if("outdoors" in nameValues)
            temp.name = nameValues.name.length < 2 ? 'Not enough symbols': '' || nameValues.name.length > 60 ? 'Many symbols': '';
        if("dom" in nameValues)
            temp.name =  nameValues.name.length > 60 ? 'Many symbols': '';
        setErrors({
                ...temp
            })
            if(nameValues == values)
                return Object.values(temp).every(x => x == "")
              //  setDisabledForm(!temp)
              const vform = Object.values(values)
              console.log(vform)
               const validForm = Object.values(values).every(value => value !== '' || null)
              // console.log(validForm)
               setDisabledForm(!validForm)
    }

    const handleSumbit = () => {

        const { name, phone, outdoors, dom, apartment} = values ;

        let itemsData = CartAllItems.map(el =>{
            return( `название :${el.name},   обьем :${el.volume},   кол-во :${el.count}` )
        })

        let total =0;
        let sum = CartAllItems.map(el =>  total = total + el.price * el.count)

        let privateHouse = (dom && apartment)? `имя :${name},телефон :${phone}, адресс :${outdoors}, парадное :${dom} , кв :${apartment} ` :
            `имя :${name},телефон :${phone}, адресс :${outdoors}`

        itemsData.unshift(privateHouse)
        itemsData.push(`общая сумма :${total}грн`)
        itemsData = itemsData.join("%0A")

        const url = fetch(`https://api.telegram.org/bot2136468207:AAE9LytqSpG9BIt_3bK2eVDxfOA_P0v5A6c/sendMessage?chat_id=394796526&text=${itemsData}`)
        console.log(itemsData)
    }

    return { 
        values, 
        setValues, 
        handleChange, 
        errors, 
        handleSumbit,
        disabledForm  
    }
}


export  function Form(props){


    const {children, ...other} = props;

    return(
        <form  autoComplete="off" {...other} >
            {props.children}
        </form>
    )
}