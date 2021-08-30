import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#DCDCDC',
    margin: '10rem auto',
    display: 'flex',
    flexDirection: 'column',
    width: '30rem',
  },
  headerTxt: {
    margin: '1rem',
    alignSelf: 'center',
  },
  tabStyle: {
    flex: 1,
  },
  inputStyle: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px',
    padding: '10px',
  },
});
export default useStyles;
