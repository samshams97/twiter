import React from 'react';
import { Divider } from '@material-ui/core';
import useStyles from '../home/Styles';
import Header from '../../header/Header';
import TweetList from '../home/components/TweetList';

const twitPost = [
  {
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
  },
];
const hashtagNames = [
  'mbape-madrid',
  'corona_virus',
  'betrayed_laporta',
  'React_features',
  'kane_city',
  'yazdani_taylor',
];

function TwitHashtags(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header
        title={props.match.params.hashtag}
        icon={<img src={'/images/hashtagg.png'} alt="hashtag pic" />}
      />
      <Divider className={classes.divider} />
      <TweetList data={twitPost} />
    </div>
  );
}

export default TwitHashtags;
