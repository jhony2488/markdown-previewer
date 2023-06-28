import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const inputStyles = makeStyles((theme: Theme) => {
  return createStyles({
    containerInput: {
      margin: '0',
    },
    input: {
      background: '#000000',
      color: theme.palette.primary.main,
      width: '45vw',
      'min-height': '79vh',
      'max-height': '79vh',
      flex: 1,
      resize: 'none',
      'white-space': 'nowrap',
      overflow: 'auto !important',
      padding: '16px'
    },
  });
});
