import React from 'react';
import { Divider } from '@material-ui/core';
import useStyles from '../home/Styles';
import Header from '../../header/Header';
import TweetList from '../home/components/TweetList';
import PersonIcon from '@material-ui/icons/Person';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllApis } from '../../../api/api-tweet';
const twitPost = [
  /* {
    sender: {
      name: 'Messi',
      id: '@Leo Messi',
      img: '/images/lms.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    sender: {
      name: 'facebook',
      id: '@FaceBook',
      img: '/images/facebook.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    sender: {
      name: 'playStation',
      id: '@Sonny',
      img: '/images/sonny.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    sender: {
      name: 'xbox',
      id: '@Microsoft',
      img: '/images/xbox.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    sender: {
      name: 'telegram',
      id: '@Telegram',
      img: '/images/telegram.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },*/
];

function TwitsByUser(props) {
  const classes = useStyles();
  const [tweetPost, setTweetPost] = useState([]);
  useEffect(() => {
    getAllApis((isOk, dataOrError) => {
      if (!isOk) return alert(dataOrError.message);
      else setTweetPost(dataOrError);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Header title={props.match.params.user} icon={<PersonIcon />} />
      <Divider className={classes.divider} />
      <TweetList data={tweetPost} />
    </div>
  );
}

export default TwitsByUser;
