import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, Grid, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import logo from 'assets/icons/logo.svg'
import topBarItems from 'utils/navbarItems'
import clsx from 'clsx'
import useRouter from 'hooks/useRouter'
import { Link as RouterLink } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiPaper-root': {
      width: '100%',
      maxWidth: { xs: '100%', sm: 400 },
      color: theme.palette.white,
      background: theme.palette.topBar.main,
    },
  },
  box: {
    height: '100%',
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  largeIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  largeBtn: {
    width: theme.spacing(10),
    height: theme.spacing(5),
  },
  closeIcon: {
    textAlign: "right",
    '& > button > span > svg': {
      fill: theme.palette.white,
    }
  },
  topBarItems: {
    color: theme.palette.white
  },
  topBarItemsSelected: {
    color: theme.palette.primarySelected.main
  },
}))

const Sidebar = (props) => {
  const { pages, open, variant, onClose, ...rest } = props;
  const classes = useStyles();
  const { location } = useRouter()

  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      className={classes.root}
    >
      <Box
        {...rest}
        className={classes.box}
      >
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item xs={6}>
            <Avatar className={classes.large} src={logo} />
          </Grid>
          <Grid item xs={6} className={classes.closeIcon}>
            <IconButton className={classes.large} onClick={onClose}>
              <CloseIcon className={classes.largeIcon} />
            </IconButton>
          </Grid>
        </Grid>
        <br /><br /><br />
        <Grid container justify="flex-start" alignItems="flex-start" direction="column" spacing={4}>
          {
            topBarItems.map(item => (
              <Grid key={item.id} item>
                <Button className={clsx({ [classes.topBarItems]: location.pathname !== item.to, [classes.topBarItemsSelected]: location.pathname === item.to })} variant="text" component={RouterLink} to={item.to}>
                  <Typography variant="h4">{item.title}</Typography>
                </Button>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
