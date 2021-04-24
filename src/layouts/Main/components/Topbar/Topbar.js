import React from 'react';
import useRouter from 'hooks/useRouter'
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom'
import topBarItems from 'utils/navbarItems'
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Logo from 'svg/logos/Logo';
import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({ 
  topBarItems: {
    color: theme.palette.white
  },
  topBarItemsSelected: {
    color: theme.palette.primarySelected.main
  },
  searchIcon: {
    color: theme.palette.white
  }
}))

const Topbar = () => {
  const { location } = useRouter()
  const classes = useStyles();

  return (
    <Grid container justify="space-between" alignItems="center" direction="row" wrap="nowrap" >
      <Grid item>
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={{ xs: 28, md: 32 }}
          width={45}
        >
          <Logo height={'100%'} width={'100%'} />
        </Box>
      </Grid>
      <Grid item container spacing={8} justify="center" alignItems="center" direction="row" wrap="nowrap">
        <Hidden xsDown>
          {
            topBarItems.map(item => (
              <Grid key={item.id} item>
                <Button className={clsx({ [classes.topBarItems]: location.pathname !== item.to, [classes.topBarItemsSelected]: location.pathname === item.to })} variant="text" component={RouterLink} to={item.to}>
                  {item.title}
                </Button>
              </Grid>
            ))
          }
        </Hidden>
      </Grid>
      <Grid item >
        <IconButton>
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

Topbar.propTypes = {

};

export default Topbar;
