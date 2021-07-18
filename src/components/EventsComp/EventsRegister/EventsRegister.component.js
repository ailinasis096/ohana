import { Box, Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
  divHeader: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: 20
  },
  image: {
    position: 'relative',
    height: 200,
    borderRadius: '50%',
    margin: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    borderRadius: '50%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    color: theme.palette.common.white,
  },
  imageSrc: {
    
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    borderRadius: 15,
    fontSize: '1.3rem',
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://lorempixel.com/400/200',
    title: 'Ingresar Imagen',
    width: '100%',
  },
];

const EventsRegister = () => {
  const classes = useStyles();
  const labels = ['Nombre de Campaña', 'Descripción','Historia']
  
  return(
    
    <div className='EventsContainer'>
      <div className={classes.divHeader}>
            <Typography variant="h5"  color="secondary">
              <Box fontWeight='fontWeightBold'>
                ¡Registra tu Campaña!
              </Box>
            </Typography>
          </div>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
    <div>  
        <TextField
          label={labels[0]}
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          rows={4}
          variant="outlined"
        />
          <TextField
          id="outlined-textarea"
          label={labels[1]}
          rows={4}
          multiline
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label={labels[2]}
          rows={4}
          multiline
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        />

    </div>
    </Grid>
    <Grid item xs={12} sm={4}>

    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>

    </Grid>
    </Grid>
    </div>

  )
}
EventsRegister.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default EventsRegister;
