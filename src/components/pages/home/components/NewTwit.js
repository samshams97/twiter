import { Grid, Button, IconButton } from '@material-ui/core';
import React from 'react';
import useStyles from '../Styles';
import CollectionsIcon from '@material-ui/icons/Collections';
import classnames from 'classnames';

export default function NewTwit() {
  const classes = useStyles();
  return (
    <div className={classes.newTwit}>
      <Grid container>
        <img src={'images/user.png'} />
        <textarea placeholder="write" className={classes.inputTwit} />
      </Grid>
      <Grid alignItems="center" container direction="row-reverse">
        <Button
          variant="contained"
          color="priamry"
          className={classes.btnStyle}
        >
          twit
        </Button>
        <IconButton className={classes.icnBtnStyle}>
          <CollectionsIcon className={classes.imgStyle} />
        </IconButton>
      </Grid>
    </div>
  );
}
