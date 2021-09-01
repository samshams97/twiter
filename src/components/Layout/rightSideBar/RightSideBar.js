import { Divider, Grid, Typography } from '@material-ui/core';
import { React, useEffect, useState } from 'react';
import useStyles from './Styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getAllUsers } from '../../../api/api-tweet';

export default function RightSideBar() {
  const [hashList, setHashList] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    getAllUsers((isOk, dataOrError) => {
      if (!isOk) return alert(dataOrError.message);
      else setHashList(dataOrError);
    });
  }, []);
  return (
    <div className={classes.root}>
      <Typography className={classes.headStyle}>
        The most famous on twitter
      </Typography>
      <Divider />
      <div className={classes.hashtagList}>
        {hashList.map((items) => (
          <Link to={'/users/' + items.name}>
            <Grid
              className={classes.hashtagList}
              container
              direction={'column'}
            >
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
          </Link>
        ))}
      </div>
    </div>
  );
}
