import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Logo from 'svg/logos/Logo';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  footerText: { color: theme.palette.white }
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={8} alignItems="center" justify="flex-start">
      <Grid item xs={1}>
        <Logo height={'100%'} width={'100%'} />
      </Grid>
      <Typography
        align="center"
        variant="h3"
        gutterBottom
        className={classes.footerText}
      >
        Easy Work
      </Typography>

      <Grid item xs={2}></Grid>

      <Grid item xs={3}>
        <Typography
          align='left'
          variant="body1"
          component={'p'}
          className={classes.footerText}
        >
          <b>Address</b><br />52-1,Jalan Aman Hijau , Taman Overseas Union ,58200 Kuala Lumpur ,Wilayah Persekutuan Kuala Lumpur
      </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={3}>
        <Typography
          align='left'
          variant="body1"
          component={'p'}
          className={classes.footerText}
        >
          <b>Contact</b><br />03-7451 5283<br />
          <b>Fax</b><br />03-7451 5283
      </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
