import { Divider } from '@material-ui/core';
import React from 'react';
import RightSideBar from './leftSideBar/LeftSideBar';
import LeftSideBar from './rightSideBar/RightSideBar';
import useStyles from './Styles';
import Home from '../pages/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Courses from '../pages/Courses';

export default function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RightSideBar />
      <Divider className={classes.divider} />
      <div className={classes.content}>
        <BrowserRouter>
          <Route exact path={'/'} component={Home} />
          <Route path={'/courses'} component={Courses} />
        </BrowserRouter>
      </div>
      <Divider className={classes.divider} />
      <LeftSideBar />
    </div>
  );
}
