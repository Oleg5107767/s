import { makeStyles } from '@material-ui/core/styles';

export const CustomPopupStyle = makeStyles(theme => ({
    dialogWrapper : {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    }
}));