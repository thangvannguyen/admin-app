import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100px',
  },
  responsivePagination:{
    [ theme.breakpoints.down(600) ]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    [ theme.breakpoints.up(600) ]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
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
  flexBoxAlignsCenter: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;