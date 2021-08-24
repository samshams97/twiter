import React from 'react';
import useStyles from '../Styles';
import { Grid, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AutorenewIcon from '@material-ui/icons/Autorenew';

export default function Tweet({ data }) {
  const renderTwit = (text) => {
    return {
      __html: text.replace(/#\S+/g, '<a href=/tags/$& style=color:blue>$&</a>'),
    };
  };

  const classes = useStyles();
  return (
    <div>
      <div className={classes.twitItems}>
        <Grid container direction="column">
          <Grid container>
            <img src={data.sender.img} />
            <Typography className={classes.nameTwiterStyle}>
              {data.sender.name}
            </Typography>
            <Typography className={classes.idStyle}>
              {data.sender.id}
            </Typography>
          </Grid>
          <Typography
            dangerouslySetInnerHTML={renderTwit(data.text)}
            className={classes.twited}
          />
        </Grid>
        <Grid alignItems="center" container direction="row-reverse">
          <Typography>16</Typography>
          <IconButton className={classes.icnBtnStyle}>
            <FavoriteIcon className={classes.likeIcon} />
          </IconButton>
          <IconButton className={classes.icnBtnStyle}>
            <AutorenewIcon className={classes.retwitIconStyle} />
          </IconButton>
        </Grid>
      </div>
    </div>
  );
}
