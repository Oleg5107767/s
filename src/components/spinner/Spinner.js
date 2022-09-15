import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { SpinnerStyles } from "./SpinnerStyle";

const Spinner = () => {

  const classes = SpinnerStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.spinnerWrap}
    >
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.spinner}
        classes={{
          circle: classes.circle,
        }}
        size={70}
      />
    </Grid>
  )
}
export default Spinner;