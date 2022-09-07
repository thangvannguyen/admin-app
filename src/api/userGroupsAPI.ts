import axiosClient from './axiosClient';

const userGroupAPI = {
  getAll: (pagesize = 10, page = 1, userGroupName = '', status = 'null') => {
    console.log(status);
    const url = '/UserGroups';
    return axiosClient.post(url, {
      page, 
      pagesize,
      userGroupName,
      status: status == 'null' ? null : (status == 'true' ? true : false),
    });
  },
};

export default userGroupAPI;
