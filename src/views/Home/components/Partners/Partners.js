import React from 'react'
import { Card, CardContent, Grid, IconButton, Typography, CardHeader, colors, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import darleneChabratLogo from 'assets/people/darlene-chabrat.jpg'
import davidCampionLogo from 'assets/people/david-campion.jpg'
import gaetanHoussinLogo from 'assets/people/gaetan-houssin.jpg'
import jeromeBoudotLogo from 'assets/people/jerome-boudot.jpg'
import jeromeMahuetLogo from 'assets/people/jerome-mahuet.jpg'
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(theme => ({
    img: {
        fill: 'white '
    },
    title: {
        color: theme.palette.topBar.main,
        fontWeight: 'bold',
        maxWidth: theme.spacing(40),
        lineHeight: theme.spacing(0.2)
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
    }
}))

const partnersList = [
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
        subTitle: '',
        description: 'HubSpot offers a full platform of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support — to help businesses.',
    },
]

const Partners = props => {
    const classes = useStyles();

    return (
        <div>
            <Grid container justify="center" alignItems="center">
                <Grid container justify="flex-start" alignItems="center" item xs={12} direction="row">
                    <IconButton>
                        <Avatar className={classes.avatar} >
                            <FavoriteIcon className={classes.img} />
                        </Avatar>
                    </IconButton>
                    <Typography variant="h3" className={classes.title}>What other people say about our services</Typography>
                </Grid>
                <Grid container justify="center" alignItems="center" item xs={12} direction="row">
                    <Carousel animation="slide">
                        {
                            partnersList.map((item, i) => <Item key={i} item={item}></Item>)
                        }
                    </Carousel>
                </Grid>
            </Grid>
        </div>
    )
}

function Item(props) {
    const classes = useStyles();

    return (
        <div className={classes.multiple}>
            <Card className={classes.cardRoot}>
                <CardHeader
                    avatar={<Avatar src={props.item.logo} className={classes.avatar}>{props.item.title}</Avatar>}
                    title={props.item.title}
                    subheader={props.item.subTitle}
                />
                <CardContent>
                    {props.item.description}
                </CardContent>
            </Card>
            <Card className={classes.cardRoot}>
                <CardHeader
                    avatar={<Avatar src={props.item.logo} className={classes.avatar}>{props.item.title}</Avatar>}
                    title={props.item.title}
                    subheader={props.item.subTitle}
                />
                <CardContent>
                    {props.item.description}
                </CardContent>
            </Card>
            <Card className={classes.cardRoot}>
                <CardHeader
                    avatar={<Avatar src={props.item.logo} className={classes.avatar}>{props.item.title}</Avatar>}
                    title={props.item.title}
                    subheader={props.item.subTitle}
                />
                <CardContent>
                    {props.item.description}
                </CardContent>
            </Card>
        </div>
    )
}

export default Partners