import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'

export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchClick = () => {
    if (auth.currentUser) { 
    navigate('/searchexercises')
    handleCloseNavMenu()
     } else {
      alert('Please sign in or create an account!')
      navigate('/signup')
     }
  }

  const handleWorkoutClick = () => {
    if (auth.currentUser) {
    navigate('/workoutcreator')
    handleCloseNavMenu()
    } else {
      alert('Please sign in or create an account!')
      navigate('/signup')
    }
  }

  const handleUpdateClick = () => {
    if (auth.currentUser) {
    navigate('/updateprofile')
    handleCloseUserMenu()
    } else {
      alert('Please sign in or create an account!')
      navigate('/signup')
    }
  }

  const handleFavoriteClick = () => {
    if (auth.currentUser) {
    navigate('/favorites')
    handleCloseUserMenu()
    } else {
      alert('Please sign in or create an account!')
      navigate('/signup')
    }
  }

  const handleWorkoutsClick = () => {
    if (auth.currentUser) {
    navigate('/workouts')
    handleCloseUserMenu()
    } else {
      alert('Please sign in or create an account!')
      navigate('/signup')
    }
  }

  const handleLogoutClick = () => {
    auth.signOut()
    navigate('/')
    handleCloseUserMenu()
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Social Fit
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key='searchexercises' onClick={handleSearchClick}>
                  <Typography textAlign="center">Search Exercises</Typography>
                </MenuItem>
                <MenuItem key='workoutcreator' onClick={handleWorkoutClick}>
                  <Typography textAlign="center">Workout Creator</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <FitnessCenterIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Social Fit
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key='searchexercises'
                onClick={handleSearchClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Search Exercises
              </Button>
              <Button
                key='workoutcreator'
                onClick={handleWorkoutClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Workout Creator
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={auth.currentUser ? auth.currentUser.displayName : ''} src="#" />
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
              <MenuItem key='updateprofile' onClick={handleUpdateClick}>
                  <Typography textAlign="center">Update Profile</Typography>
              </MenuItem>
              <MenuItem key='favorites' onClick={handleFavoriteClick}>
                  <Typography textAlign="center">Favorites</Typography>
              </MenuItem>
              <MenuItem key='workouts' onClick={handleWorkoutsClick}>
                  <Typography textAlign="center">Workouts</Typography>
              </MenuItem>
              <MenuItem key='logout' onClick={handleLogoutClick}>
                  <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}