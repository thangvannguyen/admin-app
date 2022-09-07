// material-ui
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles, styled } from '@mui/styles';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      fontWeight: 900,
      fontSize: '26px',
      textTransform: 'uppercase',
      // [theme.breakpoints.up('xl')]: {
        
      // },
      
    },
    colorF0B71C: {
      color: '#F0B71C',
    },
  
  });
  const classes = useStyles();
  return (
        <Typography
            className={classes.root}
        >
            <Box component="span">SURVEY </Box><Box component="span" className={classes.colorF0B71C}>GGG</Box>
        </Typography>

  );
};
export default Logo;

