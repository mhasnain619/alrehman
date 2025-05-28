import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../../public/alrehman.png'; // Apne logo ka path sahi karen

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                <Box component="img" src={logo} alt="Logo" sx={{ height: 40 }} />
            </Box>
            <Divider />
            <List>
                {pages.map((page) => (
                    <ListItem button key={page}>
                        <ListItemText primary={page} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar sx={{ backgroundColor: 'white', height: 80, display: 'flex', justifyContent: 'center' }} position="static" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

                    {/* Menu icon on mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{
                                mr: 1,
                                transition: 'background-color 0.3s ease, color 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'green',
                                    color: 'white',  // icon color on hover
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {drawerList}
                        </Drawer>
                    </Box>

                    {/* Logo: Left aligned on desktop, centered on mobile */}
                    <Box
                        sx={{
                            flexGrow: { xs: 1, md: 0 },
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Logo"
                            sx={{
                                height: 60,
                                cursor: 'pointer',
                                marginTop: '-15px'
                            }}
                        />
                    </Box>

                    {/* User Avatar - always right */}
                    <Box sx={{ display: 'flex', flexGrow: 0, gap: '20px' }}>
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 3,
                                alignItems: 'center',
                                whiteSpace: 'nowrap', // prevent wrapping
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{
                                        color: 'gray',
                                        textTransform: 'none',
                                        fontWeight: 500,
                                        fontSize: '1rem',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                        },
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
