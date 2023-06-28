import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  contentMarkdown: {
    flex: 1 ,
    'overflow-y': 'auto',
  },
}));

export default useStyles;
