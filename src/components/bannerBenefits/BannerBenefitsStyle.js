import { makeStyles } from '@material-ui/core/styles';

export const BannerBenefitsStyle = makeStyles((theme) => ({
    root: {
      backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1pNN3zLTHiRwrLUwTbSeGpmXz9r2W7QGs)',
      backgroundSize: '100% 492px',
      textAlign:'center',
      padding: '100px  100px  20px 100px ',
      backgroundRepeat: 'no-repeat',
    },
    titleWrap: {
        marginBottom: 70
    },
    title:{
        zIndex: 4,
        color: 'balck'
    },
    titleImg:{
        position: 'relative',
        left: 65,
        zIndex: 1,
        opacity: 0.9
    },
    text:{
        color: 'balck',
        fontSize: '16px',
        lineHeight: 'normal',
        padding: 10
    },
    [theme.breakpoints.only('xs')]: {
        root: {
            backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1juIBNb7S3XrNCZLmW7PJwpdGymPoXs0z)',
            backgroundSize: '100% 529px',  
            padding: '25px  15px  20px 15px ',
        },
        titleWrap: {
            marginBottom: 0,
        },
        titleImg: {
           width: 75,
           left: 13
        },
        title:{
            position: 'relative',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: 1,
            right: 25
        },
        text:{
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '10px 0px 10px 0px'
        }   
    },
    [theme.breakpoints.only('sm')]: {
        root: {
            backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1NMrElIqv8MIEE4ndxqGXcLralJUcp6Zk)',
            backgroundSize: '100% 580px',  
            padding: '25px  15px  20px 15px ',
        },
        titleWrap: {
            marginBottom: 0,
        },
        titleImg: {
           width: 75,
           left: 13
        },
        title:{
            position: 'relative',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: 1,
            right: 25
        },
        text:{
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '10px 0px 10px 0px'
        }
    },
    [theme.breakpoints.only('md')]: {
        root: {
            backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1NMrElIqv8MIEE4ndxqGXcLralJUcp6Zk)',
            backgroundSize: '100% 580px',  
            padding: '75px  15px  20px 15px ',
        },
        titleWrap: {
            marginBottom: 10,
        },
        title:{
            fontWeight: 'bold',
        },
    }
  
  }));