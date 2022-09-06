import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Props } from './type';

const UseButton = ({ children, className, ...otherProps }:Props) => {
  return (
        <Button className = {className} {...otherProps} >
            { children }
        </Button>
  );
};

export default UseButton;