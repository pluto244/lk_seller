import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logo from './components/Logo';
import NavMenu from './components/NavMenu';
import UserMenu from './components/UserMenu';

const pages = [
  { label: 'Объявления', path: '/advertisements' },
  { label: 'Заказы', path: '/orders' },
];

const settings = [
  { label: 'Объявления', path: '/advertisements' },
  { label: 'Заказы', path: '/orders' },
  { label: 'Logout', path: '/logout' },
];

export const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleCloseNavMenu();
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static"
    sx={{
      backgroundColor: '#292929',
    }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <NavMenu
            pages={pages}
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            handleNavigate={handleNavigate}
          />
          <UserMenu
            settings={settings}
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
            handleNavigate={handleNavigate}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

