import React,{useState} from "react";
import {TextField, Container, Grid }from "@material-ui/core"
import CustomButton from "../customButton/CustomButton";
import CustomInput from "../customInput/CustomInput";
import { useForm, Form } from "./useForm";


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
        validatePhoto,
        handleSelectPhoto, 
        handleSumbit,  
        errors,
        success,
        disabledForm 
    } = useForm(initialValue, true);


    const renderForm = () => {
        return(
            <Form>
                <Grid 
                    container
                    direction="column"
                >
                    <Grid item>
                        <h1>Форма для заповнення</h1>
                    </Grid>
                    <Grid item>
                        <CustomInput
                            placeholder="Your name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                    </Grid>
                    <Grid item>
                        <CustomInput
                            placeholder="Your phone"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            error={errors.phone}
                        />
                    </Grid>
                    <Grid 
                        container
                        direction="row"
                    >
                        <Grid item>
                            <CustomInput
                                placeholder="Your outdoors"
                                name="outdoors"
                                value={values.outdoors}
                                onChange={handleChange}
                                error={errors.outdoors} 
                            />
                        </Grid>
                        <Grid item>
                            <CustomInput
                                placeholder="Your dom"
                                name="dom"
                                value={values.dom}
                                onChange={handleChange} 
                            />
                        </Grid>
                        <Grid item>
                            <CustomInput
                                placeholder="Your apartment"
                                name="apartment"
                                value={values.apartment}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <CustomButton  
                    label={'Buy'} 
                    onClick={(e) => handleSumbit(e)}
                    disabled={disabledForm}
                />
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



    

