import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },

  mainPart: {
    flex: '1',
    backgroundColor: 'white',
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#ADD8E6',
  },
  content: {
    flex: 1,
    overflowY: 'auto',
  },
});
export default useStyles;
