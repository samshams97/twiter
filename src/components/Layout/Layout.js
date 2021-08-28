import { Divider } from '@material-ui/core';
import React from 'react';
import RightSideBar from './leftSideBar/LeftSideBar';
import LeftSideBar from './rightSideBar/RightSideBar';
import useStyles from './Styles';

export default function Layout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RightSideBar />
      <Divider className={classes.divider} />
      <div className={classes.content}>{props.children}</div>
      <Divider className={classes.divider} />
      <LeftSideBar />
    </div>
  );
}
