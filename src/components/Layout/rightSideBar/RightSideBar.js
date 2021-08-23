import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Styles';

const hashList = [
  { name: 'Facebook', id: '@Facebook', img: 'images/facebook.png' },
  { name: 'Messi', id: '@Leo Messi', img: 'images/lms.png' },
  { name: 'Ronaldo', id: '@Cristiano', img: 'images/ronaldo.png' },
  { name: 'playstation', id: '@Sony', img: 'images/sonny.png' },
  { name: 'Xbox', id: '@Microsoft', img: 'images/xbox.png' },
  { name: 'Telegram', id: '@Telegram', img: 'images/telegram.png' },
];

export default function RightSideBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.headStyle}>
        The most famous on twitter you may follow
      </Typography>
      <Divider />
      <div className={classes.hashtagList}>
        {hashList.map((items) => (
          <Grid className={classes.hashtagList} container direction={'column'}>
            <Grid container direction={'row'} alignItems="center">
              <img src={items.img} className={classes.imgStyle} />
              <Grid item direction={'column'}>
                <Typography className={classes.hashtag}>
                  {items.name}
                </Typography>
                <Typography className={classes.hashtag}>
                  {' '}
                  {items.id}{' '}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}
