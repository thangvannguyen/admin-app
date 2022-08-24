import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const Management = (props : any) => {
  return (
        <>
            <Outlet/>
        </>
  );
};


export default Management;