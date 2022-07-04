import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function TourCard() {
  return (
    <Grid item xs={3}>
      <Paper eleveation={3}>
        <img
          className='img'
          src='https://media.timeout.com/images/105124791/750/422/image.jpg'
          alt='las vegas'
        />
        <Box paddingX={1}>
          <Typography variant='subtitle1'>Immerse into the Falls</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AccessTimeIcon sx={{ width: 12.5 }} />
            <Typography variant='body2' ml={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }} mt={2.5}>
            <Rating name='read-only' readOnly size='small' value={4.5} precision={0.5} />
            <Typography variant='body2' component='p' ml={0.5}>
              4.5
            </Typography>
            <Typography variant='body2' component='p' ml={1}>
              (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6' component='h3' mt={0}>
              From C $147
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default TourCard;
