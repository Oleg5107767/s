import React,{useState} from "react";
import { Container, Grid , Typography}from "@material-ui/core"
import CustomButton from "../customButton/CustomButton";
import CustomInput from "../customInput/CustomInput";
import { useForm, Form } from "../../hooks/useForm";
import circleOrange from '../../assets/svg/circleOrange.svg'
import { UserFormStyle } from './UserFormStyle'; 



const initialValue ={
    name: '',
    phone: '',
    outdoors: '',
    dom: '',
    apartment: ''
    
}

const UserForm = () => {

    const {
        values, 
        handleChange,
        handleSumbit,  
        errors,
        disabledForm 
    } = useForm(initialValue, true);

    const classes = UserFormStyle();

    const renderForm = () => {
        return(
            <Form>
                <Grid 
                    container
                    direction="column"
                    justifyContent='center'
                    alignItems="center"
                    spacing={3}
                    
                >
                    <Grid 
                        container
                        direction="row"
                        justifyContent='flex-start'
                        alignItems="center"
                    >
                    <img src={circleOrange} alt="circle" className={classes.titleFormImg}></img>
                        <Typography 
                                component="h1"
                                variant="h6"
                                className={classes.titleForm}
                            >
                               Форма для заповнення
                        </Typography>
                    </Grid>
                    <Grid item lg={12} >
                        <Typography 
                                component="h1"
                                variant="h6"
                                className={classes.textForm}

                            >
                                Ваше имя
                        </Typography>
                    </Grid>
                    <Grid item lg={12} >
                        <CustomInput
                           // placeholder="Your name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={errors.name}
                            className={classes.input}
                           
                          
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <Typography 
                                component="h1"
                                variant="h6"
                                className={classes.textForm}

                            >
                                Ваш номер телефона
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <CustomInput
                           // placeholder="Your phone"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item lg={12}>
                        <Typography 
                                component="h1"
                                variant="h6"
                                className={classes.textForm}

                            >
                               Адресс доставки
                        </Typography>
                    </Grid>
                    <Grid 
                        container
                        direction="row"
                        justifyContent='center'
                        alignItems="center"
                        className={classes.wrapAdress}
                        
                    >
                        
                        <Grid item lg={6} >
                            <CustomInput
                               // placeholder="Your outdoors"
                                name="outdoors"
                                value={values.outdoors}
                                onChange={handleChange}
                                error={errors.outdoors}
                                className={classes.inputOutdoors} 
                            />
                        </Grid>
                        
                        
                            <Grid item lg={1}>
                                <Typography 
                                        component="h1"
                                        variant="h6"
                                        className={classes.textForm}
                                    >
                                       п
                                </Typography>
                            </Grid>
                            <Grid item lg={2}>
                                <CustomInput
                                    //placeholder="Your dom"
                                    name="dom"
                                    value={values.dom}
                                    onChange={handleChange} 
                                    className={classes.inputDomApartment} 
                                />
                            </Grid>
                                <Grid item lg={1}>
                                    <Typography 
                                            component="h1"
                                            variant="h6"
                                            className={classes.textForm}
                                        >
                                           кв
                                    </Typography>
                                </Grid>
                                <Grid item lg={2}>
                                    <CustomInput
                                      //  placeholder="Your apartment"
                                        name="apartment"
                                        value={values.apartment}
                                        onChange={handleChange}
                                        className={classes.inputDomApartment} 
                                    />
                                </Grid>
                           
                        
                    </Grid>
                    <Grid item lg={12} >
                        <CustomButton  
                            label={'Отравить'} 
                            onClick={(e) => handleSumbit(e)}
                            disabled={disabledForm}
                            className={classes.btnForm}
                        />
                    </Grid>
                </Grid>
             
            </Form>
        )
    }

    const formContent =  renderForm();

    return(
        <Container>
            {formContent}
        </Container>   
    )
}
    export default UserForm;



    

