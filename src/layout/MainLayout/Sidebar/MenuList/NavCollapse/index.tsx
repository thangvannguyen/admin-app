import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ menu, level }: any) => {
  const theme: any = useTheme();
  const customization = useSelector((state: any) => state?.customization);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const currentIndex = document.location.pathname
    .toString()
    .split('/')
    .findIndex((id) => id === menu.id);

  const handleClick = () => {
    if (currentIndex > -1) {
      setOpen(!open);
    } else {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
    }
  };
  useEffect(() => {
    if (currentIndex > -1) {
      setOpen(!open);
      setSelected(!selected ? menu.id : null);
    }
  }, []);
  useEffect(() => {
    if (currentIndex === -1) {
      setOpen(false);
      setSelected(null);
    } else {
      setOpen(true);
      setSelected(menu.id);
    }
  }, [document.location.pathname]);
  // menu collapse & item
  const menus = menu.children?.map((item: any) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon;
  const menuIcon = menu.icon ? (
    <Icon strokeWidth={1.5} size="1.3rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  return (
    <>
      <Box sx={{ ...(selected === menu.id && { borderRight: `0.4rem solid ${theme.palette.yellowMain.dark}` }) }}>
        <ListItemButton
          sx={{
            borderRadius: `${customization.borderRadius}px`,
            mb: 0.7,
            alignItems: 'flex-start',
            py: level > 0 ? 1 : 1.25,
            pl: level > 0 ? `${level * 3}rem` : '0.5rem',
            mr: 0.6,
          }}
          selected={selected === menu.id}
          onClick={handleClick}
        >
          <ListItemIcon sx={{ my: 'auto', minWidth: !menu.icon ? 18 : 36 }}>{menuIcon}</ListItemIcon>
          <ListItemText
            primary={
              <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="inherit" sx={{ my: 'auto' }}>
                {menu.title}
              </Typography>
            }
            secondary={
              menu.caption && (
                <Typography variant="caption" sx={{ ...theme.typography?.subMenuCaption }} display="block" gutterBottom>
                  {menu.caption}
                </Typography>
              )
            }
          />
          {open ? (
            <IconChevronUp stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          ) : (
            <IconChevronDown stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
          )}
        </ListItemButton>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: 'relative',

          }}
        >
          {menus}
        </List>
      </Collapse>
    </>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object,
  level: PropTypes.number,
};

export default NavCollapse;
