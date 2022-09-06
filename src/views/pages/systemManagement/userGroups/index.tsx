import React, { useEffect, useState } from 'react';
import { Box, Chip, FormControl, Grid, MenuItem, Paper, Select, Typography } from '@mui/material';
import useStyles from './styles';
import UseButton from 'ui-component/button';
import { useTheme } from '@mui/material/styles';
import FormTitle from 'ui-component/formTitle';
import { IconPencil } from '@tabler/icons';
import { Column, CreateData } from './type';
import TablePagination from 'ui-component/tablePagination';
import AddUserGroupForm from './components/addUserGroupForm';
import LabelChip from 'ui-component/labelChip';
import IconButtonComponent from 'ui-component/iconButton';
import userGroupAPI from 'api/userGroupsAPI';

const UserGroup = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [pagination, setPagination] = useState({ pageSize: 10, page: 1, totalNumberPage: 1, totalAll: 0 });
  const [rows, setRows] = useState<Array<CreateData>>([]);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [age, setAge] = React.useState('');
  const handleChange = (value: string) => {
    setAge(value);
  };

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
        <IconButtonComponent id={row.tenNhom}><IconPencil/></IconButtonComponent>,
      ));
    });
    setRows(newData);
  };

  const FetchDataByPagination = async (pageSize : number, page : number) => {
    try {
      const result = await userGroupAPI.getAll(pageSize, page);
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

  const handleOpenForm = (value : boolean) => {
    setIsOpenForm(value);
  };

  return (
        <Box p={2} sx={{ flexGrow: 1 }}>
            <FormTitle
                formTitle='Nhóm người dùng'
                btnTitle='Thêm mới'
                onOpenForm={handleOpenForm}
            />
            <AddUserGroupForm i
                isOpenForm={isOpenForm}
                onOpenForm={handleOpenForm}
            />

            <Paper sx={{ my: 3, p: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
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
                    <Grid item xs={12} md={5} >
                        <Typography variant="h5" className={classes.marginBottomInputLabel}>
                            Trạng thái
                        </Typography>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
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
                            <Box className={classes.wapperFindButton}>
                                <UseButton variant="contained" className={`${classes.findButton}`}>Tìm kiếm</UseButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <TablePagination
                columns={columns}
                rows={rows}
                sizes={[10, 20, 30]}
                onChangePage={handleChangePage}
                onChangePageSize={handleChangePageSize}
                isShowPagination={true}
                {...pagination} //pageSize, page, totalPage
            />
        </Box>
  );
};

UserGroup.propTypes = {

};

export default UserGroup;