import './Styles.css';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import useInitializeAvatarOptions from './hooks/useInitializeAvatarOptions';
const Navbar = () => {
    const {
        handleOpenUserMenu,
        handleCloseUserMenu,
        anchorElUser
    } = useInitializeAvatarOptions();

    return (
        <>
            <nav>
                <h2>Power<span>.Fit</span></h2>
                <ul>
                    <li> <Link to="/" >Inicio</Link> </li>
                    <li> <Link to="/Excercises">Ejercicios</Link> </li>
                    <li> <Link to="myRoutines">Mis Rutinas</Link> </li>
                </ul>


                {localStorage.getItem('access_token') !== null ?
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Demy Sharp" src="/static/images/avatar/2.jpg" />
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
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Link to="/profile"> <Typography style={{ color: '#000' }} id='profile' textAlign="center">Perfil</Typography></Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography style={{ color: '#000' }} id="logout" textAlign="center">Cerrar Sesión</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    :
                    <Link to="/signIn">
                        <button>Iniciar Sesión</button>
                    </Link>
                }
            </nav>
            <div className="menu">
                <MenuIcon />
            </div>
            <div className="sidebar">
                <h2>Power<span>.Fit</span></h2>
            </div>
        </>
    )
}

export default Navbar
