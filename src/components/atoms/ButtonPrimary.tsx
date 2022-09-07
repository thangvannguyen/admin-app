import React from 'react';
import { Button } from '@mui/material';

export type PrimaryButtonProps = {
  children: React.ReactNode,
  className?: string,
  onClick?: (value?:any) => void,
  variant?: any,
  color?: any,
  startIcon?: any,
  endIcon?:any
  [otherProps: string]: any,
};

const PrimaryButton = ({ children, className, variant, color, startIcon, endIcon, onClick, ...otherProps }: PrimaryButtonProps) => {
  return (
        <Button
            className={className}
            variant={variant}
            onClick={onClick}
            color={color}
            startIcon={ startIcon }
            endIcon = { endIcon }
            {...otherProps} 
          >
            {children}
        </Button>
  );
};

export default PrimaryButton;