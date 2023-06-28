import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    height: '8vh',
  },
  container: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  title:{
    ...theme.typography.body1,
    'font-size': '24px',
    'line-height': '32px',
    'text-align': 'center',
    'letter-spacing': '-0.15px',
  }
}));

export default useStyles;
