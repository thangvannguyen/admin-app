import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({

  root: {
    width: '100%',
  },
  formTitle: {
    margin: '0',
    Weight: 700,
    fontSize: '28px',
    [ theme.breakpoints.down(600) ]: {
      fontSize: '20px',
    },
  },
  marginRightFormControl: {
    marginRight: '1rem',
  },

  responsivePagination:{
    [ theme.breakpoints.down(600) ]: {
      display: 'flex',
      //   flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    [ theme.breakpoints.up(600) ]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },


  marginBottomInputLabel: {
    marginBottom: '0.6rem',
  },
  MuiPaginationItemRoot: {
    '& .MuiPaginationItem-root': {
      '&:active': {
        backgroundColor: theme.palette.yellowMain.dark,
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.yellowMain.dark,
        color: theme.palette.dark.dark,
      },
    },

  },
  //width
  w10: {
    width: '10%',
  },
  w25: {
    width: '25%',
  },
  w30: {
    width: '30%',
  },
  w50: {
    width: '50%',
  },
  w55: {
    width: '55%',
  },
  w60: {
    width: '60%',
  },
  w100: {
    width: '100%',
  },
  marginLeftTextField: {
    marginLeft: '1rem',
  },
  //Button
  saveButton: {
    fontSize: '1rem',
    color: '#000000',
    backgroundColor: '#F0B71C',
    padding: '0.8rem 2rem',
    '&:hover': {
      opacity: 0.9,
      backgroundColor: '#F0B71C',
    },
  },
  wapperFindButton: {
    height: '120%',
    width: '25%',

    [ theme.breakpoints.up(1000) ]: {
      width: '25%',
    },
    [ theme.breakpoints.down(1600) ]: {
      width: '40%',
    },
    [ theme.breakpoints.down(1000) ]: {
      width: '30%',
    },
    [ theme.breakpoints.down(600) ]: {
      width: '40%',
    },
  
  },
  findButton: {
    backgroundColor: '#434243',
    width: '100%',
    height: '50px',
    '&:hover': {
      opacity: 0.9,
      backgroundColor: '#434243',
    },
    [ theme.breakpoints.down(600) ]: {
      display: 'flex',
      fontSize: '0.6rem',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [ theme.breakpoints.up(600) ]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  addButton: {
    fontSize: '1rem',
    color: '#000000',
    backgroundColor: '#F0B71C',
    padding: '0.7rem 1.5rem',
    '&:hover': {
      opacity: 0.9,
      backgroundColor: '#F0B71C',
    },
    [ theme.breakpoints.down(600) ]: {
      display: 'flex',
      fontSize: '0.7rem',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

}));

export default useStyles;