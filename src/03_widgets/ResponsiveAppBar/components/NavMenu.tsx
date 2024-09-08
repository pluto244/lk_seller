import React from 'react';
import { Box, Button, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavMenuProps {
    pages: { label: string; path: string }[];
    anchorElNav: null | HTMLElement;
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
    handleNavigate: (path: string) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ pages, anchorElNav, handleOpenNavMenu, handleCloseNavMenu, handleNavigate }) => (
    <>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
            >
                {pages.map((page) => (
                    <MenuItem key={page.label} onClick={() => handleNavigate(page.path)}>
                        <Typography textAlign="center">{page.label}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                    key={page.label}
                    component={NavLink as React.ElementType<NavLinkProps>}
                    to={page.path}
                    sx={{
                        my: 2,
                        color: 'white',
                        display: 'block',
                        textTransform: 'none',
                        '&.active': {
                            color: '#0af',
                            borderBottom: '2px solid #0af',
                        },
                        '&:hover': {
                            color: '#0af',
                            backgroundColor: 'rgba(22, 160, 133, 0.1)',
                        },
                    }}
                >
                    {page.label}
                </Button>
            ))}
        </Box>
    </>
);

export default NavMenu;
