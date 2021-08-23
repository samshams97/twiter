import { Divider } from '@material-ui/core';
import React from 'react';
import RightSideBar from './leftSideBar/LeftSideBar';
import LeftSideBar from './rightSideBar/RightSideBar';
import useStyles from './Styles';
import Home from '../pages/home/Home';

export default function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RightSideBar />
      <Divider className={classes.divider} />
      <div className={classes.content}>
        <Home />
      </div>
      <Divider className={classes.divider} />
      <LeftSideBar />
    </div>
  );
}
