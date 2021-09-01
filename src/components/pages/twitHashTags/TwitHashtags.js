import React from 'react';
import { Divider } from '@material-ui/core';
import useStyles from '../home/Styles';
import Header from '../../header/Header';
import TweetList from '../home/components/TweetList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllApis } from '../../../api/api-tweet';

function TwitHashtags(props) {
  const classes = useStyles();
  const [hashTags, setHashTags] = useState([]);
  useEffect(() => {
    getAllApis((isOk, dataOrError) => {
      if (!isOk) return alert(dataOrError.message);
      else setHashTags(dataOrError);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Header
        title={props.match.params.hashtag}
        icon={<img src={'/images/hashtagg.png'} alt="hashtag pic" />}
      />
      <Divider className={classes.divider} />
      <TweetList data={hashTags} />
    </div>
  );
}

export default TwitHashtags;
