import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, Paper, Select } from '@mui/material';
import { useTheme } from '@mui/styles';
import { IconSquareX } from '@tabler/icons';
import useStyles from './styles';
import UseTitle from 'ui-component/title';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  [otherProps: string]: any;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <IconSquareX />
                </IconButton>
            ) : null}
        </DialogTitle>
  );
};

const AddUserGroupForm = ({ isOpenForm = false, onOpenForm }: any) => {

  const theme = useTheme();
  console.log(theme);
  const classes = useStyles(theme);

  const handleClose: any = () => {
    onOpenForm(false);
  };

  const [age, setAge] = React.useState('');
  const handleChange = (value: string) => {
    setAge(value);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
        <BootstrapDialog
            onClose={handleClose}
            classes={{ paper: classes.dialog }}
            aria-labelledby="customized-dialog-title"
            open={isOpenForm}
            fullWidth
            maxWidth="md"
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.formTitle}>
                <UseTitle variant="body1" className={classes.formTitle}>Quản lý nhóm người dùng</UseTitle>
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Paper sx={{ my: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h5" className={classes.marginBottomInputLabel}>
                                Nhóm người dùng
                            </Typography>
                            <FormControl fullWidth>
                                <Select
                                    value={age}
                                    onChange={(e) => handleChange(e.target.value as string)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Typography variant="h5" className={classes.marginBottomInputLabel}>
                                Trạng thái
                            </Typography>

                            <FormControl className={classes.marginRightFormControl} fullWidth>
                                <Select
                                    value={age}
                                    onChange={(e) => handleChange(e.target.value as string)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Typography variant="h5" className={classes.marginBottomInputLabel}>
                                Trạng thái
                            </Typography>
                            <FormControl className={classes.marginRightFormControl} fullWidth>
                                <Select
                                    value={age}
                                    onChange={(e) => handleChange(e.target.value as string)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Trang thái</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Đang hoạt động</MenuItem>
                                    <MenuItem value={20}>Tạm ngưng</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper>
                    <UseTitle variant="body1" className={classes.hierarchicalTitle}>Phân quyền</UseTitle>
                    <Grid container spacing={1} alignItems="center"  mt={2}>
                        <Grid item md={3}>
                            <UseTitle >Quản lý nhóm người dùng</UseTitle>
                        </Grid>
                        <Grid item >
                            <FormGroup row>
                                <FormControlLabel
                                 sx={{ alignItems:'center' }}
                                    control={
                                        <Checkbox
                                            {...label}
                                            defaultChecked
                                            className={classes.root}
                                        />}
                                    label="Tất cả"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            {...label}
                                            defaultChecked
                                            className={classes.root}
                                        />}
                                    label="Sủa"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            {...label}
                                            defaultChecked
                                            className={classes.root}
                                        />}
                                    label="Xem"
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </Paper>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Save changes
                </Button>
            </DialogActions>
        </BootstrapDialog>
  );
};
export default AddUserGroupForm;
