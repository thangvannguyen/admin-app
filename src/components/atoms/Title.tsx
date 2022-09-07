import React, { memo } from 'react';
import { Typography } from '@mui/material';


export type Props = {
  children: React.ReactNode,
  variant?: any,
  [ otherProps:string ]: any,
};

const Title = (
  { 
    children, 
    variant,
    ...otherProps 
  }: Props) => {

  return (
        <Typography variant = { variant} {...otherProps} sx={{ color: '#000000' }}>
            {children}
        </Typography>
  );
};


export default Title;