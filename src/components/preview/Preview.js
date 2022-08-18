 import React from 'react';
 import { PreviewStyle } from './PreviewStyle';
 import { Typography} from "@material-ui/core";
import Circle from '../../assets/svg/circleOrange.svg';
import Klipartz from '../../assets/image/klipartz.png';

 const Preview = () => {
    const classes = PreviewStyle();
    return (
        <div className={classes.root}>
            <div className={classes.titleWrap}>
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
            </div>
                
                        
                        {/*<div className={classes.imgWrapper}>
                        <img src={Klipartz} alt="Klipartz" className={classes.klipartz}></img>
                        <img src={Circle} alt="Circle"  className={classes.circle} />
    </div>*/}
                        <div className={classes.multiImg}>
                            <img src={Klipartz} alt="Klipartz" className={classes.klipartz}></img>
                        </div>
                        
        </div>
    );
 };

 
 export default Preview;