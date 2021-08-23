import { Divider } from '@material-ui/core';
import React from 'react';
import Header from '../../header/Header';
import NewTwit from './components/NewTwit';
import PostList from './components/PostList';
import useStyles from './Styles';
import HomeIcon from '@material-ui/icons/Home';

const twitPost = [
  {
    sender: {
      name: 'Messi',
      id: '@Leo Messi',
      img: 'images/lms.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    sender: {
      name: 'facebook',
      id: '@FaceBook',
      img: 'images/facebook.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    sender: {
      name: 'playStation',
      id: '@Sonny',
      img: 'images/sonny.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    sender: {
      name: 'xbox',
      id: '@Microsoft',
      img: 'images/xbox.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
  {
    sender: {
      name: 'telegram',
      id: '@Telegram',
      img: 'images/telegram.png',
    },
    text: '#Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={'Home'} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTwit />
      <PostList data={twitPost} />
    </div>
  );
}
