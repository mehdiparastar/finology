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

const useStyles = makeStyles(theme => ({
    avatar: {
        // border: '1px solid red',
        width: theme.spacing(6),
        height: theme.spacing(6),
        background: 'pink'
    },
    img: {
        fill: 'white '
    },
    title: {
        color: theme.palette.topBar.main,
        fontWeight: 'bold',
        maxWidth: theme.spacing(40),
        lineHeight: theme.spacing(0.2),        
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
    avatar: {
        backgroundColor: colors.red[500],
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

const peoplesList = [
    {
        logo: darleneChabratLogo,
        title: 'darlene chabrat',
        subTitle: 'CEO of iCloud',
        description: '"System is excellent. It has made my system user experience to become one of the easiest!"',
    },
    {
        logo: davidCampionLogo,
        title: 'david campion',
        subTitle: 'CEO of Marks.co',
        description: 'I just wanted to share a quick note and let you know that you guys do a really good job.',
    },
    {
        logo: gaetanHoussinLogo,
        title: 'gaetan houssin',
        subTitle: 'BOD of Skyscanner',
        description: 'Find your fit with Fitbit\'s family of fitness products that help you stay motivated and improve your health by tracking your activity, exercise, food, weight and sleep.',
    },
    {
        logo: jeromeBoudotLogo,
        title: 'jerome boudot',
        subTitle: 'CEO of Cisco',
        description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
    },
    {
        logo: jeromeMahuetLogo,
        title: 'Network Admin',
        subTitle: 'Web Developer',
        description: 'HubSpot offers a full platform of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support — to help businesses.',
    },
    {
        logo: jeromeBoudotLogo,
        title: 'jerome boudot',
        subTitle: 'CEO of Cisco',
        description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
    },
    {
        logo: jeromeMahuetLogo,
        title: 'Network Admin',
        subTitle: 'Web Developer',
        description: 'HubSpot offers a full platform of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support — to help businesses.',
    },
]

const PeopleList = props => {
    const classes = useStyles();

    return (
        <div>
            <Grid container justify="center" alignItems="center">
                <Grid container justify="space-between" alignItems="center" item xs={12} direction="row">
                    <div className={classes.multiple}>
                        <IconButton>
                            <Avatar className={classes.avatar} >
                                <InsertEmoticonIcon className={classes.img} />
                            </Avatar>
                        </IconButton>
                        <Typography variant="h3" className={classes.title}>Our important people is listed here</Typography>
                    </div>
                    <Grid item >
                        <Button size="small" className={classes.actionEditButton} variant="contained">Edit</Button>
                        <Button size="small" className={classes.actionAddButton} variant="contained">Add</Button>
                    </Grid>
                </Grid>
                <Grid container justify="center" alignItems="center" item xs={12} direction="row">
                    {peoplesList.map((item, index) => <ItemCard key={index} item={item} />)}
                </Grid>
            </Grid>
        </div>
    )
}

function ItemCard(props) {
    const classes = useStyles();

    return (
        <Grid item xs={6} md={3} lg={2}>
            <Card className={classes.cardRoot}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.item.logo}
                        title={props.item.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.item.subTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default PeopleList