import React from 'react';
import {Container, Grid, Box, Typography} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
const Footer = () => {
    return (
        <Container>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Grid item>
                    <Box style={{border: '1px solid black', backgroundColor: 'black', color: 'white'}}>
                        <Typography 
                            component="h1"
                            variant="h6"
                        >
                            Години роботи
                        </Typography>
                        <Grid 
                            container
                            direction='column'
                        >
                        <Grid 
                            container
                            direction='row'
                            item
                        >
                            <Typography 
                                component="h1"
                                variant="h6"
                            >
                                Пн-Чт 
                            </Typography>
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
                            item
                        >
                            <Typography 
                                component="h1"
                                variant="h6"
                            >
                                Пт-Вс 
                            </Typography>
                            <Typography 
                                component="h1"
                                variant="h6"
                            >
                                21:30 - 6:30
                            </Typography>

                        </Grid>
                    </Grid>
                    </Box>
                    
                </Grid>
                <Grid item>
                    <Box style={{border: '1px solid black', backgroundColor: 'black', color: 'white'}}>
                        <Typography 
                            component="h1"
                            variant="h6"
                        >
                            Связатся с нами
                        </Typography>
                        <Grid 
                            container
                            direction='column'
                        >
                            <Grid 
                                container
                                direction='row'
                                item
                            >
                                <InstagramIcon/>
                                <TelegramIcon/>
                                <MailOutlineIcon/>
                            </Grid>
                            <Grid 
                                container
                                direction='row'
                                item
                            >
                                <PhoneForwardedIcon/>
                                <Typography 
                                    component="h1"
                                    variant="h6"
                                >
                                    066 234 55 22
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};



export default Footer;