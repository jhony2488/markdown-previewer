import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  main: {
    display: 'grid',
    justifyContent: 'center',
  },
  mainWrapper: {
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
    'grid-gap': '20px',
    width: '95vw',
    height: '80vh',
  },
  preview: {
    color: 'white',
    background: '#000000',
    width: '45vw',
    'min-height': '80vh',
    'max-height': '80vh',
    overflow: 'auto',
    padding: '12px'
  },
  markdownInput: {
    width: '45vw',
    'min-height': '80vh',
    'max-height': '80vh',
  },
}));

export default useStyles;
