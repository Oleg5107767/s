import React from 'react';
import {Grid, Typography }from '@material-ui/core';
import { BannerBenefitsStyle } from './BannerBenefitsStyle';
import car from '../../assets/svg/car.svg';
import options from '../../assets/svg/2.svg';
import money from '../../assets/svg/3.svg';
import binge from '../../assets/svg/4.svg';
import circle from '../../assets/svg/circleBanner.svg'

const BannerBenefits = () => {


    const classes = BannerBenefitsStyle();

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
                        direction='row'
                        item lg={12} xs={12}
                        justifyContent='center'
                        alignItems="center"
                        className={classes.titleWrap}
                    >
                        <img src={circle} alt="circle" className={classes.titleImg}></img>
                            <Typography 
                                className={classes.title}
                                component="h1"
                                variant="h4"
                            >
                                Почему выбирают нас
                            </Typography>
                        </Grid>
                   
                    <Grid 
                        container
                        direction='column'
                        item lg={3} md={3} xs={6}
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
                        item lg={3} md={3} xs={6}
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
                        item lg={3} md={3} xs={6}
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
                        item lg={3} md={3} xs={6}
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

export default BannerBenefits;