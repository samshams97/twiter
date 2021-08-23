import React from 'react';
import { Divider } from '@material-ui/core';
import useStyles from '../home/Styles';
import Header from '../../header/Header';
import PostList from '../home/components/PostList';
import PersonIcon from '@material-ui/icons/Person';
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

function TwitsByUser() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={'samsHams for now'} icon={<PersonIcon />} />
      <Divider className={classes.divider} />
      <PostList data={twitPost} />
    </div>
  );
}

export default TwitsByUser;
