 import React from 'react';
 import { BannerPreviewStyle } from './BannerPreviewStyle';
 import { Typography} from "@material-ui/core";
 import { klipartz } from '../../assets/image/image';
 import {motion} from 'framer-motion';
 import LazyLoad from 'react-lazyload';

 const BannerPreview = () => {
    const classes = BannerPreviewStyle();
    return (
        <motion.div 
            className={classes.root}
        >
            <motion.div 
                className={classes.titleWrap}
                initial={{ x: -900}}
                animate={{  x: 0}}
                transition={{delay: 1, duration: 1.3 }}
            >
                <Typography 
                    component="h1"
                    variant="h3"
                    style={{color: 'white'}}
                >
                    Сервис по  быстрой  
                </Typography>
                <Typography 
                    component="h1"
                    variant="h3"
                    style={{color: '#FFA438'}}
                >
                    доставке напитков в
                </Typography>
                <Typography 
                    component="h1"
                    variant="h3"
                    style={{color: 'white'}}
                >
                    ночное время в Киеве.
                </Typography>
            </motion.div>
            <LazyLoad >   
                <motion.div 
                    className={classes.multiImg}
                    initial={{ y: -550}}
                    animate={{  y: 0}}
                    transition={{delay: 0.5, type:'spring', stiffness: 150}}
                >
                    {/*<LazyLoad >
                        <img src={klipartz} alt="Klipartz" className={classes.klipartz} ></img>
                    </LazyLoad>*/}
                    <img src={klipartz} alt="Klipartz" className={classes.klipartz} ></img>
                </motion.div>
            </LazyLoad>          
        </motion.div>
    );
 };

 
 export default BannerPreview;