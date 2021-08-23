import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#DCDCDC',
  },
  header: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  divider: {
    backgroundColor: '#F0FFFF',
  },
  newTwit: {
    padding: 24,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  twitItems: {
    padding: 24,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 7,
    borderRadius: 10,
  },
  inputTwit: {
    border: 'none',
    flex: 1,
    marginLeft: 10,
    '&:focus': {
      outline: 'unset',
    },
    fontSize: 18,
    color: 'gray',
  },
  btnStyle: {
    borderRadius: '10px',
    backgroundColor: '#AFEEEE',
    marginTop: '10px',
    fontWeight: 'bold',
    fontFamily: 'system-ui',
  },
  iconStyle: {
    width: 40,
    height: 20,
  },
  imgStyle: {
    marginRight: 5,
    marginTop: 8,
    color: 'red',
    fontSize: 35,
  },
  icnBtnStyle: {
    padding: '3px',
  },
  likeIcon: {
    color: 'red',
    fontSize: 30,
  },
  nameTwiterStyle: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  idStyle: {
    color: '#A9A9A9',
    marginLeft: 5,
    marginLeft: 5,
  },
  twited: {
    marginLeft: 63,
  },
  retwitIconStyle: {
    fontSize: 32,
  },
});
export default useStyles;
