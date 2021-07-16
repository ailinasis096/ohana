
import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo3 from '../../assets/logo3.png';
import { FormControl, Input, InputAdornment, OutlinedInput, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

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
  appBar: {
    backgroundColor: "#8568AE",
  },
  search: {
    width: 160,
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
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <ButtonBase
            focusRipple
            key={'logo'}
            className={classes.logo}
            focusVisibleClassName={classes.focusVisible}
          >
            <img alt='logo' src={logo3}></img>
          </ButtonBase>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControl size='small' color='secondary' className={classes.search} variant="outlined"> 
              <OutlinedInput
                size='small'
                //value={values.weight}
                //onChange={handleChange('weight')}
                placeholder='Buscar'
                startAdornment={<InputAdornment><SearchIcon/></InputAdornment>}
              />
            </FormControl>
            <IconButton aria-label="show 4 new notifications" color="inherit">
              <Badge badgeContent={4} color="secondary">
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
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}

export default Navbar;