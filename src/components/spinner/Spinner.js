import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import {SpinnerStyles} from "./SpinnerStyle";

const Spinner = () => {
    const classes = SpinnerStyles();
    return(
        <Grid item x>
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.spinner}
                classes={{
                  circle: classes.circle,
                }}
                size={48}
            />
        </Grid>
    )
}
export default  Spinner;