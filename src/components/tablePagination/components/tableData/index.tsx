import React from 'react';
import PropTypes from 'prop-types';
import { Chip, IconButton, TableBody, TableCell, TableRow, Tooltip } from '@mui/material';
import { checkStatus } from 'utils/checkStatus';
import LabelChip from 'components/labelChip';

const Z = ({ columns, rows }: any) => {
  return (
        <TableBody>
            {rows
              .map((row: any, index: any) => {
                return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                            {columns.map((column: any) => {
                              const value = row[column.id];
                              return (
                                    <TableCell align={column.align} width={column.width} key={column.id}>
                                        {
                                            value
                                        }
                                    </TableCell>
                              );
                            })}
                        </TableRow>
                );
              })}
        </TableBody>
  );
};


export default Z;