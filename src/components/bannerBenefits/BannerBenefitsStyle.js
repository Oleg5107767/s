import { makeStyles } from '@material-ui/core/styles';

export const BannerBenefitsStyle = makeStyles((theme) => ({
    root: {
      
      backgroundImage: 'url(https://drive.google.com/uc?export=view&id=19IM0AYDlrjNuYB2j6RnUnr9FTOOvwkax)',
        backgroundSize: '1349px',

        
      textAlign:'center',
 
      padding: '100px  100px  20px 100px '
    },
    title:{
        zIndex: 4
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
    }
  
  }));