import React from 'react';
import useStyles from './Styles';
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Grid container direction={'row'} alignItems={'center'}>
          <img src={'/images/new.png'} alt="twitter pic" />
          <Typography className={classes.headStyle}>twitter</Typography>
        </Grid>
      </Link>
      <Typography className={classes.hashtag}>the newest HaShtags</Typography>
      <Grid container direction={'column'}>
        {theNewestHashtag.map((items) => (
          <ButtonBase>
            <Link
              to={'/hashtags/' + items}
              style={{ textDecoration: 'unset', width: '100%' }}
            >
              <Grid
                className={classes.gridHashtag}
                container
                direction={'row'}
                alignItems={'center'}
              >
                <img src={'/images/hashtagg.png'} alt="" />
                <Typography>{items}</Typography>
              </Grid>
            </Link>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
}
