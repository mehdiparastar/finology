import React, { Fragment } from 'react'
import Slider from 'react-slick';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, IconButton, Typography, Paper, CardHeader, colors, CardActionArea, CardMedia, TextField, TextareaAutosize, MenuItem } from '@material-ui/core';
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
import { Markers } from 'common';

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
        marginBottom: theme.spacing(2),
        textAlign: 'center',
        margin: 'auto'
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
    contactUsPaper: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        width: 445,
        height:'100%',
        '& p': {
            color: theme.palette.topBar.main,
        },
        '& > * > div': {
            width: '100%'
        }
    },
    btn: {
        background: theme.palette.topBar.main,
        color: theme.palette.white,
        width: theme.spacing(14),
        alignSelf: 'flex-end'
        // fontWeight: 'bold'
    },
    marker: {
        width: 445,
        height: 445
    }
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
            <Typography variant="h3" className={classes.title}>Contact Us</Typography>
            <Grid container justify="center" alignItems="center">
                <Paper className={classes.contactUsPaper}>
                    <Grid container justify="center" alignItems="flex-start" direction="column" spacing={2}>
                        <Typography variant="body1">Name</Typography>
                        <TextField fullWidth size="small" variant="outlined" placeholder="Enter your name" />
                        <br />
                        <Typography variant="body1">Email</Typography>
                        <TextField fullWidth size="small" variant="outlined" placeholder="Email" />
                        <br />
                        <Typography variant="body1">Subject</Typography>
                        <TextField fullWidth size="small" variant="outlined" select placeholder="Please select your subject"  >
                            {[{ value: '1', label: '1' }, { value: '2', label: '2' }].map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <br />
                        <Typography variant="body1">Message</Typography>
                        <TextField fullWidth variant="outlined" multiline rows={8} placeholder="Write your message here" />
                        <br />
                        <Button className={classes.btn} variant="contained">Send</Button>
                    </Grid>
                </Paper>
                <div className={classes.marker}>
                    <Markers />
                </div>
            </Grid>
        </div>
    )
}

export default Customers