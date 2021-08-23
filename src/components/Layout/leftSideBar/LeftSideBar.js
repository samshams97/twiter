import React from 'react';
import useStyles from './Styles';
import { ButtonBase, Grid, Typography } from '@material-ui/core';

const theNewestHashtag = [
  'mbape-madrid',
  'corona_virus',
  'betrayed_laporta',
  'React_features',
  'kane_city',
  'yazdani_taylor',
];
export default function LeftSideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction={'row'} alignItems={'center'}>
        <img src={'images/new.png'} alt="twitter pic" />
        <Typography className={classes.headStyle}>twitter</Typography>
      </Grid>
      <Typography className={classes.hashtag}>the newest HaShtags</Typography>

      <Grid container direction={'column'}>
        {theNewestHashtag.map((items) => (
          <ButtonBase>
            <Grid
              className={classes.gridHashtag}
              container
              direction={'row'}
              alignItems={'center'}
            >
              <img src={'/images/hashtagg.png'} alt="" />
              <Typography>{items}</Typography>
            </Grid>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
}
