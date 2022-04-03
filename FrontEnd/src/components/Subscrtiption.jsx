import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


const tiers = [
  {
    title: 'Premimum',
    price: '299',
    description: [
        "Watch on TV or Laptop",
        'Ads free movies and shows',
        "single Screen",
        'Max video quality'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'VIP',
    subheader: 'Most popular',
    price: '399',
    description: [
        "Watch on TV or Laptop",
      'Ads free movies and shows',
      'you can use two devices',
      'Max video quality',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Super',
    price: '499',
    description: [
        "Watch on TV or Laptop",
        'Ads free movies and shows',
        'multiple devices',
        'Max video quality',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];



function  Subscrtiption() {
  return (
    <React.Fragment>
    <Box sx={{height:"650px"  ,width:"1000px", margin:"auto", marginTop:"70px" , backgroundColor: "#171f30"}}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 4, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="white"
          gutterBottom
        >
         HotStar
        </Typography>
        <Typography variant="h5" align="center" color="white" component="p">
        Subscribe to watch all content on Disney+ Hotstar
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container   spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid 
            
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card sx={{boxShadow: "rgba(59, 96, 183, 0.687) 0px 10px 36px 0px, rgba(81, 81, 222, 0.888) 0px 0px 0px 1px"}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                    color: "white",
                  }}
                  sx={{
                    backgroundColor: "#212b3f",
                    color: "white"
                  }}
                />
                <CardContent  sx={{ backgroundColor:"#28354f" , color :"white"}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="white">
                    ₹{tier.price}
                    </Typography>
                    <Typography variant="h6" color="white">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions sx={{backgroundColor:"#212b3f"}}>
                <Button fullWidth variant="contained">Start with this</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container></Box>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <Subscrtiption />;
}