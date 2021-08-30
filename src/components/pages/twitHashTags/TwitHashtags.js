import React from 'react';
import { Divider } from '@material-ui/core';
import useStyles from '../home/Styles';
import Header from '../../header/Header';
import TweetList from '../home/components/TweetList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function TwitHashtags(props) {
  const classes = useStyles();
  const [hashTags, setHashTags] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/tweets')
      .then((response) => {
        const data = response.data;
        setHashTags(data);
      })
      .catch((error) => {});
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
