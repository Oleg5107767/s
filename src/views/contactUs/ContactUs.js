import React from 'react';
import { Container, Grid, Typography } from "@material-ui/core";
import { ContactUsStyle } from './ContactUsStyle';
import circleOrange from '../../assets/svg/circleOrange.svg';

const ContactUs = () => {

    const classes = ContactUsStyle();

    return (
        <Container style={{ paddingTop: 100, }} maxWidth={false} spacing={2}>
            <Grid
                container
                direction='column'
            >
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems="center"
                >
                    <Grid item xs={2} sm={2} lg={3}>
                        <img src={circleOrange} alt="circle" className={classes.titleImg}></img>
                    </Grid>
                    <Grid item xs={7} sm={4} lg={5}>
                        <Typography
                            component="h1"
                            variant="h6"
                            className={classes.title}
                        >
                            Lorem ipsum
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        component="h1"
                        variant="h6"
                        className={classes.text}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems="center"
                >
                    <Grid item xs={2} sm={2} lg={3}>
                        <img src={circleOrange} alt="circle" className={classes.titleImg}></img>
                    </Grid>
                    <Grid item xs={7} sm={4} lg={5}>
                        <Typography
                            component="h1"
                            variant="h6"
                            className={classes.title}
                        >
                            Lorem ipsum
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography
                        component="h1"
                        variant="h6"
                        className={classes.text}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
};
export default ContactUs;