import axiosClient from './axiosClient';

const userGroupAPI = {
  getAll: (pagesize = 10, pages = 1) => {
    const url = `/UserGroups?pagesize=${pagesize}&pages=${pages}`;
    return axiosClient.get(url);
  },
};

export default userGroupAPI;
