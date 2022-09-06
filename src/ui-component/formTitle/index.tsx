import React, { ChangeEvent, memo } from 'react';
import UseButton from 'ui-component/button';
import UseTitle from 'ui-component/title';
import { useMediaQuery, Box } from '@mui/material';
import useStyles from './styles';
import { FormTitleProps } from './type';
import { useTheme } from '@mui/material/styles';

const FormTitle = ({ 
  formTitle = 'Nhóm người dùng', 
  btnTitle = 'Thêm mới', 
  onOpenForm = () => {}, 
}: FormTitleProps,
) => {

  const theme = useTheme();
  console.log('FormTitle', theme);
  const classes = useStyles(theme);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(600));
  const handleOpenForm = () => {
    onOpenForm(true);
  };
  return (
        <Box className={classes.flexBoxSpaceBetween}>
            <UseTitle variant={isSmallScreen ? 'h3' : 'h2'} className={classes.formTitle}> { formTitle } </UseTitle>
            <UseButton variant="contained" className={classes.addButton} onClick={ handleOpenForm }> { btnTitle } </UseButton>
        </Box >
  );
};


export default FormTitle;