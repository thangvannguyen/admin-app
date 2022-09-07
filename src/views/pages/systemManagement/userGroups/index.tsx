import React, { useEffect, useState } from 'react';
import { Box, Chip, FormControl, Grid, MenuItem, Paper, Select, TextField, Typography, useMediaQuery } from '@mui/material';
import useStyles from './styles';
// import UseButton from 'components/button';
import { useTheme } from '@mui/material/styles';
import { IconPencil } from '@tabler/icons';
import { Column, CreateData, IFormInput } from './type';
import TablePagination from 'components/tablePagination';
import LabelChip from 'components/labelChip';
import IconButtonComponent from 'components/iconButton';
import userGroupAPI from 'api/userGroupsAPI';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonPrimary from 'components/atoms/ButtonPrimary';
import Title from 'components/atoms/Title';
import AddUserGroupForm from './components/addUserGroupForm';

const UserGroup = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [pagination, setPagination] = useState({ pageSize: 10, page: 1, totalNumberPage: 1, totalAll: 0 });
  const [rows, setRows] = useState<Array<CreateData>>([]);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(600));


  const columns: readonly Column[] = [
    {
      id: 'no',
      label: 'STT',
    },
    {
      id: 'groupId',
      label: 'Mã nhóm',
    },
    {
      id: 'groupName',
      label: 'Tên nhóm',
      width: '40%',
    },
    {
      id: 'status',
      label: 'Trạng thái',
    },
    {
      id: 'action',
      label: '',
      align: 'right',

    },
  ];
  const createData = (
    no: number,
    groupId: string,
    groupName: string,
    status: any,
    action: any,
  ): CreateData => {
    return { no, groupId, groupName, status, action };
  };
  const handleSetRows = (listDataUserGroup: any) => {
    const newData: CreateData[] = [];
    listDataUserGroup.forEach((row: any, index: number) => {
      newData.push(createData(
        index + 1,
        row.maNhom,
        row.tenNhom,
                <LabelChip status={row.trangThai} />,
                <IconButtonComponent id={row.tenNhom}><IconPencil /></IconButtonComponent>,
      ));
    });
    setRows(newData);
  };

  const FetchDataByPagination = async (pageSize: number, page: number, valueSearch?: string, valueStatus?: string) => {
    try {
      const result = await userGroupAPI.getAll(pageSize, page, valueSearch, valueStatus);
      if (result && result.data && result.status == 200) {
        const { listDataUserGroup, totalAll, totalNumberPage } = result.data;
        handleSetRows(listDataUserGroup);
        setPagination(prevState => ({
          ...pagination,
          totalAll,
          totalNumberPage,
          pageSize: prevState.pageSize,
          page: prevState.page,
        }));

        return result.data;
      }
    } catch (error) {
      throw new Error();
    }
  };

  useEffect(() => {
    FetchDataByPagination(pagination.pageSize, pagination.page);
  }, []);

  const handleChangePage = async (page: number) => {
    setPagination({ ...pagination, page });
    await FetchDataByPagination(pagination.pageSize, page);
  };

  const handleChangePageSize = async (pageSize: number) => {
    setPagination({ ...pagination, pageSize, page: 1 });
    await FetchDataByPagination(pageSize, 1);
  };

  const handleOpenForm = (value: boolean) => {
    setIsOpenForm(value);
  };

  //validate form
  const schema = yup.object().shape({
    valueSearch: yup.string(),
    valueStatus: yup.string(),
  });

  const defaultValues: IFormInput = {
    valueSearch: '',
    valueStatus: 'null',

  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues });

  const handleSearchData = (data: IFormInput) => {
    FetchDataByPagination(pagination.pageSize, pagination.page, data.valueSearch, data.valueStatus);
  };

  return (
        <Box p={2} sx={{ flexGrow: 1 }}>
            <AddUserGroupForm
                isOpenForm={isOpenForm}
                onOpenForm={handleOpenForm}
            />
            <Box className={classes.flexBoxSpaceBetween}>
                <Title variant={isSmallScreen ? 'h3' : 'h2'} className={classes.formTitle}> Nhóm người dùng </Title>
                <ButtonPrimary variant="contained" className={classes.addButton} onClick={()=>handleOpenForm(true)}> Thêm mới </ButtonPrimary>
            </Box >
            
            {/* search form */}
            <form onSubmit={handleSubmit(handleSearchData)}>
                <Paper sx={{ my: 3, p: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <Title variant="h5" className={classes.marginBottomInputLabel}> Nhóm người dùng </Title>
                            <Controller
                                name="valueSearch"
                                control={control}
                                render={({
                                  field: { onChange, onBlur, value, ref },
                                }) => {
                                  return (
                                        <TextField
                                            id="valueSearch"
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
                        </Grid>
                        <Grid item xs={12} md={5} >
                            <Typography variant="h5" className={classes.marginBottomInputLabel}>
                                Trạng thái
                            </Typography>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
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
                                <Box className={classes.wapperFindButton}>
                                    <ButtonPrimary className={classes.findButton} variant="contained" type="submit">Tìm kiếm</ButtonPrimary>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
            <TablePagination
                columns={columns}
                rows={rows}
                sizes={[10, 20, 30]}
                onChangePage={handleChangePage}
                onChangePageSize={handleChangePageSize}
                isShowPagination={true}
                {...pagination}
            />
        </Box>
  );
};

UserGroup.propTypes = {

};

export default UserGroup;