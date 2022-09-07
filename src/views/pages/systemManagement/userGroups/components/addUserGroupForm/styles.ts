import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: any) => ({
  root: {
    '&.Mui-checked': {
      color: theme.palette.yellowMain.dark,
    },
  },

  dialog: {
   
   
  },
  inputLabel: {
    marginBottom: '8px',
    fontWeight: '500',
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
    marginTop: '22px',
    fontWeight: 700,
    fontSize: '18px',
    color: '#000000',
  },

  fontWeightTitle:{
    fontWeight: 500,
  },

  marginRightFormControlLabel:{
    marginRight: '3rem',
  },
  wapperButton: {
    display:'flex',
    justifyContent:'center',
    marginBottom:'20px',
  },
  closeButton: {
    backgroundColor: theme.palette.darkColor.main,
    color: theme.palette.background.paper,
    padding:'10px 66.5px',
  },
  saveButton:{
    backgroundColor: theme.palette.yellowMain.dark,
    color: '#000000',
    padding:'10px 66.5px',
  },
}));

export default useStyles;