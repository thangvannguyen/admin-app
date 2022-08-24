// material-ui
import { List, Typography } from '@mui/material';

// project imports
import menuItem from 'menu-items';
import NavCollapse from './NavCollapse';
import NavItem from './NavItem';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case 'item':
        return <NavItem key={item.id} item={item} level={0} />;
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={0} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <List> {navItems} </List>;
};

export default MenuList;
