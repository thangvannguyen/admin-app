import React from 'react';
import { Chip } from '@mui/material';

const LabelChip = ({ status, successMessage = 'Đang hoạt động', errorMessage = 'Tạm ngưng' }: any) => {
  return (
        <Chip
            label={status ? successMessage : errorMessage}
            className={status ? 'MuiChipActive' : 'MuiChipPause'}
        />
  );
};

export default LabelChip;