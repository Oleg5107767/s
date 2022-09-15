import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGoogleService from '../../service/useGoogleService';
import Spinner from '../../components/spinner/Spinner';
import CustomButton from '../../components/customButton/CustomButton';
import Popup from '../../components/popup/Popup';
import { categoryProductArr, joinedCart } from '../../actions';
import { Grid, Container, Typography, TextField } from '@material-ui/core';
import { withSideBar } from '../../HOC/withSideBar';
import { CategoryProductStyle } from './CategoryProductStyle';
import deliveryCarImg from '../../assets/svg/delivery.svg';
import uahImg from '../../assets/svg/uah.svg';
import { motion } from 'framer-motion';

const CategoryProduct = () => {

    const [categoryItem, setCategoryItem] = useState([])
    const [itemId, setItemId] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const { getCategory, loading } = useGoogleService();
    const { sheet, categoryProduct } = useSelector(state => state);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const classes = CategoryProductStyle();

    useEffect(() => {
        sheet === "Categorys" ? navigate("/") : onRequest()
    }, [sheet])


    const onRequest = () => {
        getCategory()
            .then(transformArr)
            .then(onCategoryListLoaded)
    }

    const transformArr = (arr) => {
        arr.map(el => {
            let count = 0
            el.count = count
            return el
        })
        return arr
    }

    const onCategoryListLoaded = (arr) => {
        setCategoryItem(arr)
        dispatch(categoryProductArr(arr))
    }

    const hendleItemId = (e) => {
        setItemId(e.target.id)
        setOpenPopup(true)
    }

    const handlecountItem = (e, event) => {
        e.preventDefault()
        let obj = categoryProduct.filter(item => item.id === e.currentTarget.id)[0];
        event === 'add' ? ++obj.count : --obj.count
        if (obj.count <= 0) {
            obj.count = 0
        }
        dispatch(categoryProductArr(categoryProduct))
    }

    const addToCart = (e) => {
        e.preventDefault()
        let objToCatr = categoryProduct.filter(item => item.id === e.currentTarget.id)[0];
        let tempObj = { ...objToCatr }
        dispatch(joinedCart(tempObj))
        objToCatr.count = 0
    }

    const handleSubgroup = (e) => {
        e.preventDefault()
        let tempCategoryItem = categoryProduct.filter(item => item.subgroup === e.currentTarget.id)
        setCategoryItem([...tempCategoryItem])
    }
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        },
    };
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            }
        }
    };
    const renderCategoryList = (arr) => {
        const items = arr.map(el => {
            return (
                <motion.li key={el.id} className={classes.item} variants={item} >
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        key={el.id}
                        id={el.id}
                        style={{ padding: 20 }}
                    >
                        <Grid item >
                            <div className={classes.bg}>
                                <motion.img
                                    src={el.picture}
                                    id={el.id}
                                    className={classes.imgCategory}
                                    onClick={(e) => hendleItemId(e)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 1.3 }}
                                >
                                </motion.img>
                            </div>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            alignContent='center'
                        >
                            <Grid item >
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    className={classes.text}
                                >
                                    {el.name}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    className={classes.text}
                                >
                                    {el.volume}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item lg={5} xs={12}>
                                <Grid
                                    container
                                    direction='row'
                                    justifyContent="center"
                                    alignItems='center'
                                >
                                    <Grid item lg={6} >
                                        <img src={uahImg} className={classes.uah}></img>
                                    </Grid>
                                    <Grid item lg={5} >
                                        <Typography
                                            component="h1"
                                            variant="h6"
                                            className={classes.price}
                                        >
                                            {el.price}грн
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {el.кол ?
                                <>
                                    <Grid item lg={2} xs={4} className={classes.btnCountWrap}>
                                        <CustomButton id={el.id} label={'-'} className={classes.btnCount} onClick={(e) => handlecountItem(e, '-')} />
                                    </Grid>
                                    <Grid item lg={3} xs={4} className={classes.btnCountWrap}>
                                        <TextField
                                            id="outlined-basic"
                                            variant="outlined"
                                            placeholder={String(el.count)}
                                            className={classes.inputCount}
                                        />
                                    </Grid>
                                    <Grid item lg={2} xs={4} className={classes.btnCountWrap}>
                                        <CustomButton id={el.id} label={'+'} className={classes.btnCount} onClick={(e) => handlecountItem(e, 'add')} />
                                    </Grid>
                                </>
                                : <Grid item lg={12} xs={12} >
                                    <Typography
                                        component="h1"
                                        variant="h6"
                                        className={classes.disabled}
                                    >
                                        Нет в наличии
                                    </Typography>
                                </Grid>
                            }
                        </Grid>
                        {el.кол ?
                            <Grid item xs={12}>
                                <CustomButton id={el.id} label={'В корзину'} className={classes.btnToCart} onClick={(e) => addToCart(e)} />
                            </Grid>
                            : <Grid item xs={12}>
                                <CustomButton id={el.id} label={'В корзину'} className={classes.btnToCart} onClick={(e) => addToCart(e)} disabled={true} />
                            </Grid>
                        }
                    </Grid>
                </motion.li >
            )
        })

        return (
            <motion.ul
                className={classes.container}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {items}
            </motion.ul>
        )
    }
    const updateSubgroupTab = (arr) => {

        let set = new Set(arr.filter(el => sheet === el.selector).map(el => el.subgroup))
        let arrSubgroup = [...set]
        return (
            <Grid
                container
                direction='row'
                item lg={12} xs={12}
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                {arrSubgroup.map(el => {
                    return (el ?
                        <Grid item xs={6} md={4} lg={3} key={el}
                            className={classes.subgroupWrap}
                        >
                            <CustomButton
                                id={el}
                                onClick={(e) => handleSubgroup(e)}
                                className={classes.subgroup}
                                label={el}
                            />
                        </Grid>
                        : null)
                })}
            </Grid>
        )
    }

    const renderAdvertisingBanner = () => {
        return (
            <Grid
                container
                direction='row'
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={4} lg={2} className={classes.imgAdvertisingBanner}>
                    <img src={deliveryCarImg} />
                </Grid>
                <Grid item xs={8} lg={8}>
                    <Typography
                        component="h1"
                        variant="h6"
                        className={classes.textAdvertisingBanner}
                    >
                        Быстрая доставка напитков в ночное время!
                    </Typography>
                </Grid>
            </Grid>
        )
    }
    const renderLorem = () => {
        if (categoryProduct[0]) {
            return (
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    className={classes.loremWraper}
                    spacing={4}
                >
                    <Grid item>
                        <Typography
                            component="h1"
                            variant="h5"
                            className={classes.loremTitle}
                        >
                            Доставка - {sheet}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            component="h1"
                            variant="h6"
                            className={classes.text}
                        >
                            {categoryProduct[0].lorem}
                        </Typography>
                    </Grid>
                </Grid>
            )
        }
    }

    const items = renderCategoryList(categoryItem);
    const itemsSubgroup = updateSubgroupTab(categoryProduct);
    const advertisingBanner = renderAdvertisingBanner();
    const loremText = renderLorem();
    const spinner = loading ? <Spinner /> : null;
    const modal = itemId ? <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} setItemId={setItemId} item={itemId} categoryProduct={categoryProduct} /> : null;

    return (
        <Container disableGutters maxWidth={false} className={classes.containerWrap}>
            <Grid
                container
                direction='column'
                spacing={4}
            >
                <Grid item >
                    {advertisingBanner}
                </Grid>
                <Grid item >
                    {itemsSubgroup}
                </Grid>
                <Grid item >
                    {spinner}
                    {items}
                    {modal}
                </Grid>
                <Grid item>
                    {loremText}
                </Grid>
            </Grid>
        </Container>
    )
}

export default withSideBar(CategoryProduct);