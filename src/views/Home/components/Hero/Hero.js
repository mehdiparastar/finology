/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typed from 'react-typed';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import banner from 'assets/images/banner.png'
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.white,
    fontWeight: 'bold'
  },
  typedTitle: {
    color: theme.palette.secondary.light
  },
  subTitle: {
    color: theme.palette.white,
  },
  banner: {
    width: theme.spacing(55),
    height: theme.spacing(55),
    marginTop: theme.spacing(20),
  },
  bannerBG: {
    backgroundColor: theme.palette.topBar.secondary,
  }
}))

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box className={classes.bannerBG}>
      <Container maxWidth="lg" >
        <Grid container spacing={4} >
          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
              <Box marginBottom={2}>
                <Typography
                  variant="h2"
                  color="textPrimary"
                  className={classes.title}
                >
                  Make development
              <br />
                  {' '}
                  <Typography
                    color={'primary'}
                    component={'span'}
                    variant={'inherit'}
                    className={classes.typedTitle}
                  >
                    <Typed
                      strings={['easy with us.', 'fast with us.', 'reliable with us.']}
                      typeSpeed={80}
                      loop={true}
                    />
                  </Typography>
                </Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography
                  variant="h6"
                  component="p"
                  className={classes.subTitle}
                >
                  Doing development can never be easy, and it takes time and resources.
              <br />
              We at EasyWork has the solution.
            </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              height={'100%'}
              width={'100%'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              maxHeight={450}
            >
              <img alt="banner" className={classes.banner} src={banner} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
