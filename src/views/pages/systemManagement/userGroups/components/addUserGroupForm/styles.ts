import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  root: {
    '&.Mui-checked': {
      color: theme.palette.yellowMain.dark,
    },
  },

  dialog: {
    position: 'absolute',
    top: '20%',
  },
  marginBottomInputLabel: {
    marginBottom: '0.6rem',
  },

  marginRightFormControl: {
    marginRight: '1rem',
  },
  formTitle: {
    margin: '0',
    fontWeight: 700,
    fontSize: '28px',
    [ theme.breakpoints.down(600) ]: {
      fontSize: '20px',
    },
  },
  hierarchicalTitle: {
    margin: '0',
    marginTop: '12px',
    fontWeight: 700,
    fontSize: '18px',
    color: '#000000',

    
    // [ theme.breakpoints.down(600) ]: {
    //   fontSize: '20px',
    // },
  },
  displayFlex:{
    
  },
}));

export default useStyles;