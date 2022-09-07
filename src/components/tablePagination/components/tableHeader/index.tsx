import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, tableCellClasses, TableHead, TableRow } from '@mui/material';
import styled from '@mui/styles/styled';

const StyledTableCell = styled(TableCell)(
  ( { theme }: any) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey['100'],
      color: theme.palette.dark.dark,
      fontSize: 16,
      fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }),
);

const TableHeader = ({ columns, ...otherProps }: any) => {
  return (
        <TableHead {...otherProps}>
            <TableRow>
              {
                (columns && columns.length) > 0 && (
                  columns.map((column: any) => (
                    <StyledTableCell key={column.id}>{column.label}</StyledTableCell>
                  ))
                )
              }
            </TableRow>
        </TableHead>
  );
};


export default TableHeader;