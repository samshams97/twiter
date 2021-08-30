import { Divider } from '@material-ui/core';
import React from 'react';
import Header from '../../header/Header';
import NewTwit from './components/NewTwit';
import TweetList from './components/TweetList';
import useStyles from './Styles';
import HomeIcon from '@material-ui/icons/Home';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [twitPost, setTwitPost] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get('http://localhost:3000/tweets')
      .then((response) => {
        const data = response.data;
        setTwitPost(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Header title={'Home'} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTwit />
      <TweetList data={twitPost} />
    </div>
  );
}
