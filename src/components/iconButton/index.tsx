import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@mui/material';

const IconButtonComponent = ({ children, id, ...otherProps }:any) => {
  return (
    <Tooltip title='' onClick={()=>{console.log(id);}}>
      <IconButton>
        {children}
      </IconButton>
    </Tooltip>
  );
};


export default IconButtonComponent;