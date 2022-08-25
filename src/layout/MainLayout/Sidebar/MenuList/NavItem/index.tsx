import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';


// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }: any) => {
  const theme: any = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state: any) => state?.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const Icon = item.icon;
  const itemIcon = item?.icon ? (<Icon stroke={1.5} size="1.3rem" />) : <></>;

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }
  let listItemProps: any = {
    component: forwardRef((props, ref: any) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />),
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }
  const itemHandler = (id: any) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
    // eslint-disable-next-line
    }, []);

  return (
    <Box sx={{ ...(customization.isOpen.findIndex((id: any) => id === item.id) > -1 && level < 1  && { borderRight: `0.4rem solid ${theme.palette.yellowMain.dark}` }) }}>
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            sx={{
              borderRadius: `${customization.borderRadius}px`,
              mb: 0.7,
              alignItems: 'flex-start',
              backgroundColor: level > 0 ? 'transparent !important' : 'inherit',
              py: level > 0 ? 1 : 1.25,
              pl: level > 0 ? `${level * 2.8}rem` : '0.5rem',
              mr: 0.6,
            }}
            selected={customization.isOpen.findIndex((id: any) => id === item.id) > -1}
            onClick={() => itemHandler(item.id)}
        >
            <ListItemIcon sx={{ my: 'auto', minWidth: item?.icon ? 36 : 0 }}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant={customization.isOpen.findIndex((id: any) => id === item.id) > -1 ? 'h5' : 'body1'} color="inherit">
                        {item.title}
                    </Typography>
                }
                secondary={
                    item.caption && (
                        <Typography variant="caption" sx={{ ...theme?.typography?.subMenuCaption }} display="block" gutterBottom>
                            {item.caption}
                        </Typography>
                    )
                }
            />
            {item.chip && (
                <Chip
                    color={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                />
            )}
        </ListItemButton>
    </Box>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;
