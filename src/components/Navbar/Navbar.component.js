
import { Avatar, FormControl, InputAdornment, OutlinedInput, TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import ButtonBase from '@material-ui/core/ButtonBase';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/More';
import SearchIcon from '@material-ui/icons/Search';
import React, { useRef, useState } from 'react';
import logo3 from '../../assets/logo3.png';
import Favorite from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: '3%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.text,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  logo: {
    position: 'absolute',
    left: '45%'
  },
  search: {
    width: 300,
    color: 'primary',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1.5px solid',
        borderColor: theme.palette.primary.main,
      }
    }
  },
  appBar: {
    top: 0,
  },
  bottomAppBar: {
    top: 'auto',
    bottom: 0,
  },
  growBottom: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  favIcon: {
    position: 'absolute',
    left: '30%'
  },
  starIcon: {
    position: 'absolute',
    left: '40%'
  },
  personIcon: {
    position: 'absolute',
    right: '40%'
  },
  assessmentIcon: {
    position: 'absolute',
    right: '30%'
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const renderMenu = (
    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
              <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
              <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
        </Grow>
      )}
    </Popper>
  );

  return (
    <div className={classes.grow}>
      <AppBar 
        className={classes.appBar}
        position="fixed"
        color='white'
      >
        <Toolbar>
          <FormControl size='small' color='primary' className={classes.search} variant="outlined"> 
              <OutlinedInput
                size='small'
                //value={values.weight}
                //onChange={handleChange('weight')}
                placeholder='Buscar'
                startAdornment={<InputAdornment><SearchIcon color= 'primary'/></InputAdornment>}
              />
          </FormControl>

          <div className={classes.logo}>
          <ButtonBase
            focusRipple
            key={'logo'}
            focusVisibleClassName={classes.focusVisible}
          >
            <img alt='logo' src={logo3}></img>
          </ButtonBase></div>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new notifications" color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              ref={anchorRef}
              aria-controls={open ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              color="inherit"
            >
              <Avatar alt="Remy Sharp" src="https://i.pinimg.com/474x/a8/6b/93/a86b9392f1317260214b89a7340cc778.jpg" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
     
      <AppBar position="fixed" color="white" className={classes.bottomAppBar}>
        <Toolbar>
          <IconButton color="primary" className={classes.favIcon} aria-label="open drawer">
            <Favorite />
          </IconButton>
          <IconButton color="primary" className={classes.starIcon} aria-label="open drawer">
            <StarIcon />
          </IconButton>
          <Fab color="primary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.growBottom} />
          <IconButton color="primary" className={classes.personIcon}>
            <PersonIcon />
          </IconButton>
          <IconButton color="primary" className={classes.assessmentIcon}>
            <AssessmentIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;