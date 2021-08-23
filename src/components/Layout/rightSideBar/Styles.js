import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '25%',
    backgroundColor: 'white',
  },
  headStyle: {
    fontWeight: 'bold',
    fontSize: '25px',
    color: '#000000',
    margin: '20px',
  },
  hashtag: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: '14px',
  },
  hashtagList: {
    backgroundColor: '#F0FFFF',
    borderRadius: '20px',
    padding: '8px',
    margin: '8px',
  },
  imgStyle: {
    width: '60px',
    height: '60px',
    marginLeft: '12px',
    marginRight: '12px',
  },
});
export default useStyles;
