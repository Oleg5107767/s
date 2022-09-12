import React from 'react';
import {Container, Grid, Box, Typography} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import {FooterStyle} from './FooterStyle';


const Footer = () => {

    const classes = FooterStyle();
    return (
        <Container
            style={{paddingBottom: 30, paddingTop: 30}}
        >
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Grid item >
                <Box className={classes.block}>
                <Grid 
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Typography 
                            className={classes.title}
                            component="h1"
                            variant="h6"
                        >
                            Години роботи
                        </Typography>
                    
                        
                        <Grid 
                            container
                            direction='row'
                            justifyContent="center"
                            alignItems="center"
                           // spacing={1}
                        >
                            <Grid item  lg={3}>
                                <Typography 
                                    component="h1"
                                    variant="h6"
                                >
                                    Пн-Чт 
                                </Typography>
                            </Grid>
                            <Grid item lg={4}  >
                                <Typography 
                                    component="h1"
                                    variant="h6"
                                    
                                >
                                    21:00 - 4:30 
                                </Typography>
                            </Grid>
                          

                       <Grid 
                            container
                            direction='row'
                            justifyContent="center"
                            alignItems="center"
                            //spacing={2}
                        >
                            <Grid item lg={3}>
                                <Typography 
                                    component="h1"
                                    variant="h6"
                                >
                                    Пт-Вс 
                                </Typography>
                            </Grid>
                            <Grid item lg={4}>
                                <Typography 
                                    component="h1"
                                    variant="h6"
                                >
                                    21:30 - 6:30
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Grid>
                    </Box>
                    </Grid>
                
                <Grid item >
                    <Box className={classes.block}>
                    <Grid 
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Typography 
                            className={classes.title}
                            component="h1"
                            variant="h6"
                        >
                            Связатся с нами
                        </Typography>
                        <Grid 
                            container
                            direction='row'
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item lg={4} >
                                <InstagramIcon className={classes.img}/>
                            </Grid>
                            <Grid item lg={4}>
                                <TelegramIcon className={classes.img}/>
                            </Grid>
                            <Grid item lg={4}>
                                <MailOutlineIcon className={classes.img}/>
                            </Grid>
                        </Grid>
                        <Grid 
                            container
                            direction='row'
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            
                        >
                            <Grid item lg={2}>
                                <PhoneForwardedIcon/>
                            </Grid>
                            <Grid item lg={10}>
                                <Typography 
                                    component="h1"
                                    variant="h6"
                                >
                                    066 234 55 22
                                </Typography>
                            </Grid>  
                        </Grid>
                        
                    </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};



export default Footer;