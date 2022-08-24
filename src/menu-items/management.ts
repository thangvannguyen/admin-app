// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| MANAGENMENT MENU ITEMS ||============================== //

const managements = {
  id: 'system-management',
  title: 'Quản trị hệ thống',
  type: 'collapse',
  icon: icons.IconDashboard,
  children: [
    {
      id: 'user-group',
      title: 'Nhóm người dùng',
      type: 'item',
      url: '/system-management/user-group',
      target: false,
    },
    {
      id: 'user-management',
      title: 'Quản trị người dùng',
      type: 'item',
      url: '/system-management/user-management',
      target: false,

    },
  ],
};

export default managements;
