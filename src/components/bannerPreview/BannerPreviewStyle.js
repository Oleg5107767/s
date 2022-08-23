
import { makeStyles} from '@material-ui/core/styles';

export const BannerPreviewStyle = makeStyles(theme => ({
    root: {
        backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1OvatdWSTVi1zOtA11ULFjnqSf9mZ2Qxe)',
        backgroundSize: '1349px 567px',
        backgroundPosition: 'center',
        backgroundRepeat  : 'no-repeat',
        width: '1349px',
        height: '567px',
    },
    klipartz: {
        width: 300,
        zIndex: 8 ,
        right: 130,
        position: 'absolute',
        
        right: 0,
        //bottom: 20
    },
    multiImg:{
        top: 82,
        right: 130,
        position: 'absolute',
        backgroundImage: `url(${"https://drive.google.com/uc?export=view&id=1vspSpAdHUwObSELYpx1Trvt9eh8XKxjm"})`,
        backgroundPosition: 'center',
        backgroundRepeat  : 'no-repeat',
        backgroundSize: 719,
        width: 500,
        height: 450,
    },
    titleWrap: {
        position: 'absolute',
        top: 175,
        left: 205,
        background: '#100f0e',
        textAlign: 'center',
        borderRadius: 70,
        boxShadow: '1px 1px 10px 5px #100f0e',
        opacity: 0.9,
        zIndex: 11 ,
        boxSizing: 'border-box',
        padding: '10px 30px 10px 30px'
    }
}));
