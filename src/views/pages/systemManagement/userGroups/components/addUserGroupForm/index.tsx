import * as React from 'react';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/styles';
import useStyles from './styles';
import Title from 'components/atoms/Title';
import { IconSquareX } from '@tabler/icons';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { IFormInput } from './type';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonPrimary from 'components/atoms/ButtonPrimary';



export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  [otherProps: string]: any;
  onClose: () => void;
}

export interface AddUserGroupFormProps {
  isOpenForm: boolean,
  onOpenForm: (value: boolean) => void;
}

const AddUserGroupForm = ({ isOpenForm = false, onOpenForm }: AddUserGroupFormProps) => {
  const theme = useTheme();
  console.log(theme);

  const classes = useStyles(theme);

  const handleClose = () => {
    onOpenForm(false);
  };


  const schema = yup.object().shape({
    userGroupId: yup.string().required('Required'),
    userGroupName: yup.string().required('Required'),
    valueStatus: yup.string().required('Required'),
  });

  const defaultValues: IFormInput = {
    userGroupId: '',
    userGroupName: '',
    valueStatus: '',

  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues });

  const handleSubmitData = (data: IFormInput) => {
    console.log(data);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (


        <Dialog
            classes={{ paper: classes.dialog }}
            open={isOpenForm}
            onClose={handleClose}
            maxWidth="lg"
            fullWidth
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" display='flex' justifyContent='space-between'>
                <Title variant="body1" className={classes.formTitle}>Quản lý nhóm người dùng</Title>
                <IconSquareX onClick={handleClose} />
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(handleSubmitData)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <Title variant="h4" className={classes.inputLabel}>
                                Mã nhóm
                            </Title>
                            <FormControl fullWidth>
                                <Controller
                                    name="userGroupId"
                                    control={control}
                                    render={({
                                      field: { onChange, onBlur, value, ref },
                                    }) => {
                                      return (
                                            <TextField
                                                id="userGroupId"
                                                onChange={onChange}
                                                inputRef={ref}
                                                onBlur={onBlur}
                                                defaultValue={value}
                                                fullWidth
                                                placeholder="-"
                                            />
                                      );
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Title variant="h4" className={classes.inputLabel}>
                                Tên nhóm
                            </Title>

                            <FormControl fullWidth>
                                <Controller
                                    name="userGroupName"
                                    control={control}
                                    render={({
                                      field: { onChange, onBlur, value, ref },
                                    }) => {
                                      return (
                                            <TextField
                                                id="userGroupName"
                                                onChange={onChange}
                                                inputRef={ref}
                                                onBlur={onBlur}
                                                defaultValue={value}
                                                fullWidth
                                                placeholder="-"
                                            />
                                      );
                                    }}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Title variant="h4" className={classes.inputLabel}>
                                Trạng thái
                            </Title>
                            <FormControl className={classes.marginRightFormControl} fullWidth>
                                <Controller
                                    name="valueStatus"
                                    control={control}
                                    render={({ field: { onChange, onBlur, value, name, ref } }) => {
                                      return (
                                            <Select
                                                id="valueStatus"
                                                onChange={onChange}
                                                inputRef={ref}
                                                onBlur={onBlur}
                                                value={value}
                                            >
                                                <MenuItem value="null">-</MenuItem>
                                                <MenuItem value="true">Đang hoạt động</MenuItem>
                                                <MenuItem value="false">Tạm ngưng</MenuItem>
                                            </Select>
                                      );
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Box>
                        <Title className={classes.hierarchicalTitle}>Phân quyền</Title>
                        <Grid container spacing={1} alignItems="center" mt={1} ml={1}>
                            <Grid item xs={12} md={3} >
                                <Title  variant='h4' className={classes.fontWeightTitle}>Quản lý nhóm người dùng</Title>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <FormGroup row>
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Tất cả"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Sủa"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
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

                        <Grid container spacing={1} alignItems="center" mt={1} ml={1}>
                            <Grid item xs={12} md={3}>
                                <Title  variant='h4' className={classes.fontWeightTitle} >Quản lý người dùng</Title>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <FormGroup row>
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Tất cả"
                                    />
                                    <FormControlLabel
                                    className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Sủa"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
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
                            <Grid item md={2}>
                              
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Đồng bộ"
                                    />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="center" mt={1} ml={1}>
                            <Grid item xs={12} md={3}>
                                <Title variant='h4' className={classes.fontWeightTitle}>Ngân hàng câu hỏi</Title>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <FormGroup row>
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Tất cả"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Sủa"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
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
                            <Grid item md={2}>
                              
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Xuất Excel"
                                    />
                            </Grid>
                            <Grid item md={2}>
                              
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Đồng bộ"
                                    />
                            </Grid>
                        </Grid>

                        <Grid container spacing={1} alignItems="center" mt={1} ml={1}>
                            <Grid item xs={12} md={3}>
                                <Title  variant='h4' className={classes.fontWeightTitle}>Bài khảo sát</Title>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <FormGroup row>
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Tất cả"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Sủa"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
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
                            <Grid item md={2} >
                              
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Tạo bài khảo sát"
                                    />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="center" mt={1} ml={1}>
                            <Grid item xs={12} md={3} >
                                <Title className={classes.fontWeightTitle}>{}</Title>
                            </Grid>
                            <Grid item >
                                <FormGroup row>
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Sao chép bài Khảo sát"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Sao chép Link"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Xóa"
                                    />
                                    <FormControlLabel
                                        className={classes.marginRightFormControlLabel}
                                        control={
                                            <Checkbox
                                                {...label}
                                                defaultChecked
                                                className={classes.root}
                                            />}
                                        label="Khóa bài khảo sát"
                                    />
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </Box>
                </form>

            </DialogContent>


            <DialogActions className={classes.wapperButton}>
                <ButtonPrimary className={classes.closeButton}>
                    Đóng
                </ButtonPrimary >
                <ButtonPrimary className={classes.saveButton}>
                    Lưu
                </ButtonPrimary >
                {/* <Button onClick={handleClose} autoFocus>
                    Agree
                </Button> */}
            </DialogActions>
        </Dialog>
  );
};

export default AddUserGroupForm;