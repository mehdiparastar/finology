import React, { Fragment } from 'react'
import Slider from 'react-slick';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, IconButton, Typography, Paper, CardHeader, colors, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import darleneChabratLogo from 'assets/people/darlene-chabrat.jpg'
import davidCampionLogo from 'assets/people/david-campion.jpg'
import gaetanHoussinLogo from 'assets/people/gaetan-houssin.jpg'
import jeromeBoudotLogo from 'assets/people/jerome-boudot.jpg'
import jeromeMahuetLogo from 'assets/people/jerome-mahuet.jpg'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import airbnbIcon from 'assets/images/airbnb.png'
import appleIcon from 'assets/images/apple.PNG'
import facebookIcon from 'assets/images/facebook.PNG'
import googleIcon from 'assets/images/google.PNG'
import microsoftIcon from 'assets/images/microsoft.PNG'
import nvidiaIcon from 'assets/images/nvidia.PNG'
import samsungIcon from 'assets/images/samsung.PNG'
import teslaIcon from 'assets/images/tesla.PNG'

const useStyles = makeStyles(theme => ({
    avatar: {
        // border: '1px solid red',
        width: theme.spacing(8),
        height: theme.spacing(8),
        // background: 'pink'
    },
    img: {
        fill: 'white '
    },
    title: {
        color: theme.palette.topBar.main,
        fontWeight: 'bold',
        maxWidth: theme.spacing(40),
        lineHeight: theme.spacing(0.2),
        marginBottom: theme.spacing(2)
    },

    slider: {
        border: '1px solid red',
        width: '100%',
        height: '100%'
        // maxWidth: 100
    },
    sliderContainer: {
        padding: '40px',
        background: '#419be0',
        width: '100%'
    },
    cardRoot: {
        height: 200,
        margin: theme.spacing(2)
    },
    multiple: {
        display: 'flex',
        flexDirection: 'row'
    },
    actionEditButton: {
        marginRight: theme.spacing(1),
        color: colors.orange[400],
        background: colors.orange[100],
        opacity: '0.6',
        fontWeight: 'bold'
    },
    actionAddButton: {
        marginRight: theme.spacing(1),
        color: colors.purple[600],
        background: colors.purple[50],
        opacity: '0.6',
        fontWeight: 'bold'
    },
    media: {
        height: 140,
    },
}))

const customersList = [
    { logo: airbnbIcon },
    { logo: appleIcon },
    { logo: facebookIcon },
    { logo: googleIcon },
    { logo: microsoftIcon },
    { logo: nvidiaIcon },
    { logo: samsungIcon },
    { logo: teslaIcon },
]

const Customers = props => {
    const classes = useStyles();

    return (
        <div>
            <Grid container justify="center" alignItems="center">
                <Grid container justify="center" alignItems="center" item xs={12} direction="row">
                    <Typography variant="h3" className={classes.title}>We've worked with</Typography>
                </Grid>
                <Grid container justify="center" alignItems="center" item xs={12} direction="row" spacing={1}>
                    {customersList.map((item, index) => <Grid item xs={4} md={1}><Avatar className={classes.avatar} key={index} src={item.logo} /></Grid>)}
                </Grid>
            </Grid>
        </div>
    )
}

export default Customers