import React, { memo } from 'react';
import { Typography } from '@mui/material';
import { Props } from './type';

const UseTitle = ({ children, ...otherProps }: Props) => {

  return (
        <Typography {...otherProps}>
            {children}
        </Typography>
  );
};


export default UseTitle;