import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    maxHeight: 500,
    borderRadius: 5,
  },
  media: {
    height: '60%',
    width: '60%',
    marginLeft: 40,
    paddingTop: '56.25%', // 16:9
  },
  grid: {
    marginRight: 20
  },
  gridItem: {
    marginTop: 20,
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor: theme.palette.primary.main,
    borderRadius: 5
  },
  divButton: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: 20
  },
  button: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  description: {
    display: 'box',
    lineClamp: 8,
    boxOrient: 'vertical',  
    overflow: 'hidden',
  },
  cardTitle: {
    display: 'box',
    lineClamp: 1,
    boxOrient: 'vertical',  
    overflow: 'hidden',
  },
  search: {
    marginTop: 20,
    marginBottom: 50,
    width: 900,
  },
  divPagination: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: 80,
    marginBottom: 50,
  },
}));

const events = [
    {
        id: 1,
        img: 'https://static.wixstatic.com/media/89f2b5_0358a3e04f7944c9875aa7ff1cfa1faf~mv2.png/v1/fill/w_166,h_180,al_c,q_85,usm_0.66_1.00_0.01/89f2b5_0358a3e04f7944c9875aa7ff1cfa1faf~mv2.webp',
        contact: '2994092178',
        location: 'Plottier, Neuquén',
        type: 'Monetaria',
        description: 'Volver a jugar es una organización civil, sin ánimo de lucro, que opera gracias al aporte económico de personas como vos, que creen en el trabajo social y en la Solidaridad.'+ 
        'Tu donación por más chica que pueda parecer  nos permite brindarle ayuda humanitaria  a las diversas familias  y a merenderos del Barrio Las Tunas, Gral Pacheco.' +
        'Estamos convencidos que entre todos podemos ayudarlos a afrontar esta pandemia.'+        
        'Nunca hay límites para lo que se hace desde el corazón',
        end_date: '02/05/2021',
        init_date: '19/01/2021',
        name: 'Volver a jugar'
    },
    {
        id: 2,
        img: 'data:image/jpeg;base64,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',
        contact: '3514893256',
        location: 'Córdoba, Córdoba',
        type: 'Monetaria',
        description: 'Coincidiendo con el Día Mundial del Alzheimer, la Fundación ACE pone en marcha Regala Memoria, campaña para sensibilizar a la ciudadanía sobre la necesidad de obtener recursos destinados a la investigación para luchar contra la enfermedad, considerada por la Organización Mundial de la Salud (OMS) como una "pandemia sociosanitaria".',
        end_date: '23/12/2021',
        init_date: '01/01/2021',
        name: 'Regala Memoria'
    },
    {
      id: 3,
      img: 'data:image/jpeg;base64,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',
      contact: '3514893256',
      location: 'Córdoba, Córdoba',
      type: 'Monetaria',
      description: 'Coincidiendo con el Día Mundial del Alzheimer, la Fundación ACE pone en marcha Regala Memoria, campaña para sensibilizar a la ciudadanía sobre la necesidad de obtener recursos destinados a la investigación para luchar contra la enfermedad, considerada por la Organización Mundial de la Salud (OMS) como una "pandemia sociosanitaria".',
      end_date: '23/12/2021',
      init_date: '01/01/2021',
      name: 'Regala Memoria Dos'
    },
    {
      id: 4,
      img: 'https://static.wixstatic.com/media/89f2b5_0358a3e04f7944c9875aa7ff1cfa1faf~mv2.png/v1/fill/w_166,h_180,al_c,q_85,usm_0.66_1.00_0.01/89f2b5_0358a3e04f7944c9875aa7ff1cfa1faf~mv2.webp',
      contact: '2994092178',
      location: 'Plottier, Neuquén',
      type: 'Monetaria',
      description: 'Volver a jugar es una organización civil, sin ánimo de lucro, que opera gracias al aporte económico de personas como vos, que creen en el trabajo social y en la Solidaridad.'+ 
      'Tu donación por más chica que pueda parecer  nos permite brindarle ayuda humanitaria  a las diversas familias  y a merenderos del Barrio Las Tunas, Gral Pacheco.' +
      'Estamos convencidos que entre todos podemos ayudarlos a afrontar esta pandemia.'+        
      'Nunca hay límites para lo que se hace desde el corazón',
      end_date: '02/05/2021',
      init_date: '19/01/2021',
      name: 'Volver a jugar'
  },
    {
      id: 5,
      img: 'data:image/jpeg;base64,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',
      contact: '3514893256',
      location: 'Córdoba, Córdoba',
      type: 'Monetaria',
      description: 'Coincidiendo con el Día Mundial del Alzheimer, la Fundación ACE pone en marcha Regala Memoria, campaña para sensibilizar a la ciudadanía sobre la necesidad de obtener recursos destinados a la investigación para luchar contra la enfermedad, considerada por la Organización Mundial de la Salud (OMS) como una "pandemia sociosanitaria".',
      end_date: '23/12/2021',
      init_date: '01/01/2021',
      name: 'Regala Memoria'
    }
]

const EventsList = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handlePage = (event, value) => {
    setPage(value);
  };

  return (
        <div className="EventsContainer">
          
          <div className={classes.divButton}>
            <Typography variant="h5"  color="primary">
              <Box fontWeight='fontWeightBold'>
                Listado de Campañas
              </Box>
            </Typography>
          </div>

          <div className={classes.divButton}>
            <FormControl className={classes.search} variant="outlined"> 
              <InputLabel htmlFor="outlined-adornment-amount">Buscar</InputLabel>
              <OutlinedInput
                id="outlined-adornment-search"
                //value={values.amount}
                //onChange={handleChange('amount')}
                startAdornment={<InputAdornment position="start"> <SearchIcon color='primary'/></InputAdornment>}
                labelWidth={60}
              />
            </FormControl>
          </div>

          <Grid container justifyContent="center">
            {events.map((event) => (
            <div className={classes.grid}>
              <Grid key={event.id} item className={classes.gridItem} >
                <Paper elevation={5}> 
                  <Card className={classes.root} variant="outlined">
                    <CardHeader
                        title={
                          <Tooltip title={event.name}>
                          <Typography className={classes.cardTitle} variant="h6" color="primary">
                            <Box fontWeight='fontWeightBold'>
                              {event.name}
                            </Box>
                          </Typography></Tooltip>
                        }
                        subheader={
                          <Typography noWrap variant="caption" component="p">
                            {'Finaliza: '+ event.end_date}
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
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
              <div className={classes.divButton}>
                <Button className={classes.button}
                  variant="contained" 
                  endIcon={<ArrowForwardIcon />}
                  >
                  Conoce más
                </Button>
              </div>
            </div>
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