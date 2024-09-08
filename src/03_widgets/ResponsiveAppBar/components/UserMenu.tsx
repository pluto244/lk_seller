import React from 'react';
import { Box, Menu, MenuItem, IconButton, Tooltip, Avatar, Typography } from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface UserMenuProps {
  settings: { label: string; path: string }[];
  anchorElUser: null | HTMLElement;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  handleNavigate: (path: string) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ settings, anchorElUser, handleOpenUserMenu, handleCloseUserMenu }) => (
  <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem
          key={setting.label}
          component={NavLink as React.ElementType<NavLinkProps>}
          to={setting.path}
          sx={(theme) => ({
            textDecoration: 'none',
            color: 'inherit',
            '&.active': {
              backgroundColor: theme.palette.action.selected, 
            },
          })}
        >
          <Typography textAlign="center">{setting.label}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>
);

export default UserMenu;
