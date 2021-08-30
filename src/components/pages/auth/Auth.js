import { Button, Paper, Typography } from '@material-ui/core';
import { React, useState } from 'react';
import useStyles from './Styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Input from '@material-ui/core/Input';

const LOGIN_TAB_VALUE = 1;
const REGISTER_TAB_VALUE = 2;

const Auth = () => {
  const classes = useStyles();
  const [tab, setTab] = useState();
  const handleChange = (e, newValue) => {
    setTab(newValue);
  };
  return (
    <Paper className={classes.root}>
      <Typography className={classes.headerTxt}>welcome to twitter</Typography>
      <Tabs
        value={tab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab
          className={classes.tabStyle}
          label="Login"
          value={LOGIN_TAB_VALUE}
        />
        <Tab label="Sign in" value={REGISTER_TAB_VALUE} />
      </Tabs>
      {tab === LOGIN_TAB_VALUE && (
        <div className={classes.inputStyle}>
          <Typography> UserName </Typography>
          <Input></Input>
          <Typography> Password </Typography>
          <Input></Input>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      )}
      {tab === REGISTER_TAB_VALUE && (
        <div className={classes.inputStyle}>
          <Typography> FullName </Typography>
          <Input></Input>

          <Typography> UserName </Typography>
          <Input></Input>
          <Typography> Password </Typography>
          <Input></Input>

          <Typography> repeat Password </Typography>
          <Input></Input>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </div>
      )}
    </Paper>
  );
};

export default Auth;
