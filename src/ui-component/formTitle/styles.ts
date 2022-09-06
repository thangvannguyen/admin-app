import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({

  root: {
    width: '100%',
  },
  formTitle: {
    margin: '0',
    fontWeight: 700,
    fontSize: '28px',
    [ theme.breakpoints.down(600) ]: {
      fontSize: '20px',
      fontWeight: 700,
    },
  },

  flexBoxSpaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  addButton: {
    fontSize: '1rem',
    color: theme.palette.common.black,
    backgroundColor: theme.palette.yellowMain.dark,
    padding: '0.7rem 1.5rem',
    '&:hover': {
      opacity: 0.9,
      backgroundColor: theme.palette.yellowMain.dark,
    },
    [ theme.breakpoints.down(600) ]: {
      fontSize: '0.7rem',
    },
  },

}));

export default useStyles;