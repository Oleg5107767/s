import React from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import circleOrange from '../../assets/svg/circleOrange.svg';
import carDelivery from '../../assets/svg/delivery.svg';
import bottle from '../../assets/svg/bottle.svg';
import cashhand from '../../assets/svg/cashhand.svg';
import { PaymentDeliveryStyle } from './PaymentDeliveryStyle';

const PaymentDelivery = () => {

    const classes = PaymentDeliveryStyle();

    return (
        <Container style={{ paddingTop: 100, }} maxWidth={false} /*disableGutters*/>
            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems="center"
            >
                <Grid
                    container
                    direction="row"
                    justifyContent='center'
                    alignItems="center"
                >
                    <Grid item xs={2} sm={2} lg={3}>
                        <img src={circleOrange} alt="circle" className={classes.titleImg}></img>
                    </Grid>
                    <Grid item xs={8} sm={4} lg={5}>
                        <Typography
                            component="h1"
                            variant="h6"
                            className={classes.titlePayment}
                        >
                            Условия оплаты
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent='center'
                    alignItems="flex-end"
                >
                    <Grid item lg={8} sm={8} >
                        <Grid
                            container
                            direction="column"
                            justifyContent='center'
                            alignItems="flex-start"
                        >
                            <Grid item lg={12} >
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    className={classes.text}
                                >
                                    Наш интернет магазин предоставляет два способа оплаты:
                                </Typography>
                            </Grid>
                            <Grid item lg={10}  >
                                <List>
                                    <ListItem  >
                                        <ListItemIcon>
                                            <img src={bottle} className={classes.bottlelImg}></img>
                                        </ListItemIcon>
                                        <ListItemText primary={"Оплата банковской картой во время оформления заказа"} className={classes.text} />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item lg={10} >
                                <List>
                                    <ListItem  >
                                        <ListItemIcon>
                                            <img src={bottle} className={classes.bottlelImg}></img>
                                        </ListItemIcon>
                                        <ListItemText primary={"Оплата наличными при получении заказа"} className={classes.text} />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item lg={12} >
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    className={classes.text}
                                >
                                    Оплатить стоимость заказа выможете как по безналу, так и наличными.
                                    Наша компания сделала оплату максимально простой, чтобы не занимать лишнего времени клиента.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={2} >
                        <img src={cashhand} alt="cashhand" className={classes.cashhand}></img>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent='center'
                    alignItems="center"
                >
                    <Grid item xs={2} sm={2} lg={3}>
                        <img src={circleOrange} alt="circle" className={classes.titleImg}></img>
                    </Grid>
                    <Grid item xs={8} sm={4} lg={5} >
                        <Typography
                            component="h1"
                            variant="h6"
                            className={classes.titlePayment}
                        >
                            Условия доставки
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent='center'
                    alignItems="center"
                >
                    <Grid item lg={8} sm={8}>
                        <List>
                            <ListItem  >
                                <ListItemIcon>
                                    <img src={bottle} className={classes.bottlelImg}></img>
                                </ListItemIcon>
                                <ListItemText
                                    primary={"По Киеву доставка осуществляется в период с 22-00 до 04-30 в рабочие дни, в выходные с 22-00 до 5-30"}
                                    className={classes.text}
                                />
                            </ListItem>
                            <ListItem  >
                                <ListItemIcon>
                                    <img src={bottle} className={classes.bottlelImg}></img>
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Минимальная сумма заказа на бесплатную доставку - 350 грн"}
                                    className={classes.text}
                                />
                            </ListItem>
                            <ListItem  >
                                <ListItemIcon>
                                    <img src={bottle} className={classes.bottlelImg}></img>
                                </ListItemIcon>
                                <ListItemText
                                    primary={"При заказе на сумму до 330 грн доставка платная - 150 грн"}
                                    className={classes.text}
                                />
                            </ListItem>
                            <ListItem  >
                                <ListItemIcon>
                                    <img src={bottle} className={classes.bottlelImg}></img>
                                </ListItemIcon>
                                <ListItemText
                                    primary={"Доставка осуществляется в течении 40мин с момента подтверждения заказа Оператором"}
                                    className={classes.text}
                                />
                            </ListItem>
                            <ListItem  >
                                <ListItemIcon>
                                    <img src={bottle} className={classes.bottlelImg}></img>
                                </ListItemIcon>
                                <ListItemText
                                    primary={"При заказе на сумму 330 грн доставка платная - 150 грн "}
                                    className={classes.text}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item lg={4} sm={2}>
                        <img src={carDelivery} alt="carDelivery" className={classes.deliveryCarImg}></img>
                    </Grid>
                    <Grid item lg={12}>
                        <List>
                            <ListItem  >
                                <ListItemText
                                    primary={"Курьер выполняет доставку Вашего  заказа до двери квартиры на любой этаж, если в здании работает лифт."}
                                    className={classes.text}
                                />
                            </ListItem>
                            <ListItem  >
                                <ListItemText
                                    primary={"При получении товара обязательно проверьте  комплектацию заказа."}
                                    className={classes.text}
                                />
                            </ListItem>
                            <ListItem  >
                                <ListItemText
                                    primary={"Будем рады за обратную связь."}
                                    className={classes.text}
                                />
                            </ListItem>
                            <ListItem  >
                                <ListItemText
                                    primary={"Курьер обязан и вправе запросить документ, подтверждающий возраст получателя товара, и отказать в передачи продукции, если возраст получателя  менее 18 лет."}
                                    className={classes.text}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};
export default PaymentDelivery;