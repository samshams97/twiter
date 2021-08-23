import React from 'react';
import useStyles from './Styles';
import { Typography } from '@material-ui/core';

export default function Header({ icon, title }) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      {icon}
      <Typography className={classes.headerTitle}>{title}</Typography>
    </div>
  );
}
