import React from 'react';
import {Grid, Typography }from '@material-ui/core';
import { BannerAdvertisingStyle } from './BannerAdvertisingStyle';
import car from '../../assets/svg/car.svg';
import options from '../../assets/svg/2.svg';
import money from '../../assets/svg/3.svg';
import binge from '../../assets/svg/4.svg';
import circle from '../../assets/svg/circleBanner.svg'

const BannerAdvertising = () => {
    const classes = BannerAdvertisingStyle();
    return (
        <div className={classes.root}>
            
            <Grid
                container
                direction='row'
                //alignItems='center'
                justifyContent='center'
                spacing={2}
                >
                    <Grid 
                        container
                        direction='column'
                        item lg={12}
                    >
                        <img src={circle} alt="circle" ></img>
                            <Typography 
                                className={classes.title}
                                component="h1"
                                variant="h4"
                                style={{color: 'balck'}}
                            >
                                Почему выбирают нас
                            </Typography>
                        </Grid>
                   
                    <Grid 
                        container
                        direction='column'
                        item lg={3}
                        >
                        <img src={car} alt="car" ></img>
                        <Typography 
                            className={classes.text}
                            component="h1"
                            variant="h6"
                        >
                            Доставка в течении 40 минут (с момента подтверждения заказа)
                        </Typography>
                    </Grid>
                    <Grid 
                        container
                        direction='column'
                        item lg={3}
                    >
                        <img src={options} alt="options" ></img>
                        <Typography 
                            className={classes.text}
                            component="h1"
                            variant="h6"
                            style={{color: 'balck'}}
                        >
                            Обрабтак заказа в течении 4 минут
                        </Typography>
                    </Grid>
                    <Grid 
                        container
                        direction='column'
                        item lg={3}
                    >
                        <img src={money} alt="money" ></img>
                        <Typography 
                            className={classes.text}
                            component="h1"
                            variant="h6"
                            style={{color: 'balck'}}
                        >
                            Удобный способ оплаты
                        </Typography>
                    </Grid>
                    <Grid 
                        container
                        direction='column'
                        item lg={3}
                        >
                        <img src={binge} alt="money" ></img>
                        <Typography 
                            className={classes.text}
                            component="h1"
                            variant="h6"
                            style={{color: 'balck'}}
                        >
                            Придерживаемся правильных условий хранения напитков
                        </Typography>
                    </Grid>
                </Grid>
            
        </div>
    );
};



export default BannerAdvertising;