import React from 'react'
import { Avatar, Button, Card, CardContent, Grid, IconButton, Typography, colors, CardActionArea, CardMedia, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import darleneChabratLogo from 'assets/people/darlene-chabrat.jpg'
import davidCampionLogo from 'assets/people/david-campion.jpg'
import gaetanHoussinLogo from 'assets/people/gaetan-houssin.jpg'
import jeromeBoudotLogo from 'assets/people/jerome-boudot.jpg'
import jeromeMahuetLogo from 'assets/people/jerome-mahuet.jpg'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    // avatar: {
    //     // border: '1px solid red',
    //     width: theme.spacing(6),
    //     height: theme.spacing(6),
    //     background: 'pink'
    // },
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
        height: 350,
        minWidth: 250,
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
        height: 260,
    },
    checkBtn: {
        padding: theme.spacing(0, 1)
    }
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
        title: 'Negin khandan',
        subTitle: 'CEO of Cisco',
        description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
    },
    {
        logo: jeromeMahuetLogo,
        title: 'mehdi parastar',
        subTitle: 'Web Developer',
        description: 'HubSpot offers a full platform of marketing, sales, customer service, and CRM software — plus the methodology, resources, and support — to help businesses.',
    },
]

const PeopleList = ({ setOpenEdit, setOpenAdd }) => {
    const classes = useStyles();
    const [selectedPeople, setSelectedPeople] = useState(peoplesList.reduce((p, c) => ({ ...p, [c.title]: false }), {}))

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
                        <Button disabled={!Object.values(selectedPeople).includes(true)} onClick={() => setOpenEdit(true)} size="small" className={classes.actionEditButton} variant="contained">Edit</Button>
                        <Button onClick={() => setOpenAdd(true)} size="small" className={classes.actionAddButton} variant="contained">Add</Button>
                    </Grid>
                </Grid>
                <Grid container justify="center" alignItems="center" item xs={12} direction="row">
                    {peoplesList.map((item, index) => <ItemCard key={index} item={item} selected={selectedPeople} setSelected={setSelectedPeople} />)}
                </Grid>
            </Grid>
        </div>
    )
}

function ItemCard({ item, selected, setSelected }) {
    const classes = useStyles();

    const handleChange = (event) => {
        setSelected({
            ...peoplesList.reduce((p, c) => ({ ...p, [c.title]: false }), {}),
            [item.title]: event.target.checked
        })
    }

    return (
        <Grid item xs={6} md={4} lg={3}>
            <Card className={classes.cardRoot}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.logo}
                        title={item.title}
                    >
                        <FormControlLabel className={classes.checkBtn}
                            control={<Checkbox checked={selected[item.title] === true} onChange={handleChange} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} name="checkedH" />}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.subTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default PeopleList