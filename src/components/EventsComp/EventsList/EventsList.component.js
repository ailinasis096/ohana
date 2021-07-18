import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PeopleIcon from '@material-ui/icons/People';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import SpaIcon from '@material-ui/icons/Spa';
import { Pagination } from '@material-ui/lab';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    borderRadius: 5,
  },
  media: {
    height: '100%',
    width: 'auto',
    paddingTop: '56.25%', // 16:9
  },
  gridItem: {
    marginRight: 20,
    borderRadius: 5
  },
  divHeader: {
    justifyContent: 'center',
    display: 'flex',
    paddingTop: 50
  },
  button: {
    color: theme.palette.primary.rose,
    fontWeight: 'bold'
  },
  description: {
    display: 'box',
    lineClamp: 4,
    boxOrient: 'vertical',  
    overflow: 'hidden',
  },
  cardTitle: {
    color: theme.palette.primary.rose,
    display: 'box',
    lineClamp: 1,
    boxOrient: 'vertical',  
    overflow: 'hidden',
  },
  search: {
    marginTop: 20,
    marginBottom: 70,
    width: 600,
  },
  divPagination: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: 80,
    marginBottom: 130,
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  chip: {
    marginRight: 40,
    height: 40,
    width: 150,
  },
  shareBtn: {
    '&:hover': {
      color: theme.palette.primary.main,
    }
  }
}));

const filters = [
  {
    id: 1,
    name: 'Animales',
    icon: <PetsIcon/>
  },
  { id: 2,
    name: 'ONGs',
    icon: <PeopleIcon/>
  },
  {
    id: 3,
    name: 'Medio Ambiente',
    icon: <SpaIcon/>
  },
  { id: 4,
    name: 'Salud',
    icon: <AccessibilityNewIcon/>
  },
  { id: 5,
    name: 'Otros',
    icon: <FavoriteIcon/>
  }
]

const EventsList = ({events}) => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(5);

  console.log('events: ', events)

  const handlePage = (event, value) => {
    setPage(value);
  };

  const handleChange = (value) => {
    setSelectedFilter(value)
  }

  return (
        <div className="EventsContainer">
          <div className={classes.divHeader}>
            <Typography variant="h5"  color="secondary">
              <Box fontWeight='fontWeightBold'>
                Explora campañas
              </Box>
            </Typography>
          </div>

          <Paper elevation={0} className={classes.chips}>
            {filters.map((filter) => (
              <Chip
              className={classes.chip}
              icon={filter.icon}
              label={filter.name}
              onClick={ () => handleChange(filter.id) }
              color={(filter.id === selectedFilter ? 'secondary' : 'default')}
              variant="outlined"
            />
            ))}
          </Paper> 

          <Grid container justifyContent="center" spacing={3}> 
            {events.map((event) => (
              <Grid key={event.id} item xs={3} className={classes.gridItem} >
                <Paper elevation={5}> 
                  <Card className={classes.root} variant="outlined">
                    <CardHeader
                        title={
                          <Tooltip title={event.name}>
                          <Typography className={classes.cardTitle} variant="h6">
                            <Box fontWeight='fontWeightBold'>
                              {event.name}
                            </Box>
                          </Typography></Tooltip>
                        }
                        action={
                          <IconButton aria-label="share" className={classes.shareBtn} >
                            <ShareIcon />
                          </IconButton>
                        }
                        subheader={
                          <Typography noWrap variant="caption" component="p">
                            {event.category}
                          </Typography>
                        }
                    />
                    <CardMedia
                        className={classes.media}
                        image={event.img}
                        title={event.name}
                    />
                    <CardContent>
                        <Typography Card className={classes.description} variant="body2" component="p">
                            {event.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <Button className={classes.button}
                        component={Link}
                        to={`/events/edit/${event.id}`}
                        endIcon={<ArrowForwardIcon />}
                        >
                        Conoce más
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>


          <div className={classes.divPagination}>
            <Pagination
              color='secondary'
              count={20}
              page={page}
              onChange={handlePage}
            />
          </div> 
        </div>  
  );
}

export default EventsList;