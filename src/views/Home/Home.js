import { Grid, Typography } from '@material-ui/core'
import { Page } from 'common'
import React, { Fragment } from 'react'
import dashboard from 'assets/images/dashboard.png'
import signIn from 'assets/images/sign-in.png'
import { Hero, Partners, PeopleList, Customers, ContactUs, AddPeople, EditPeople } from './components'
import { makeStyles } from '@material-ui/styles';
import Image from 'material-ui-image'
import { useState } from 'react'


const useStyles = makeStyles(theme => ({
    page: {
        marginTop: theme.spacing(2),
    },
    title: {
        color: theme.palette.topBar.main,
        fontWeight: 'bold',
        maxWidth: theme.spacing(30),
        lineHeight: theme.spacing(0.2)
    },
    body: {
        maxWidth: theme.spacing(50)
    },
    test: {
        border: '1px solid red'
    },
}))

const Home = props => {
    const classes = useStyles();
    const [openEditPeople, setOpenEditPeople] = useState(false)
    const [openAddPeople, setOpenAddPeople] = useState(false)

    return (
        <Fragment>
            <Hero />
            <Page className={classes.page}>
                <Grid container spacing={8} alignItems="center" justify="center">
                    <Grid item xs={12} md={6}>
                        <Image src={dashboard} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography className={classes.title} variant="h3" >We can give you our best user experience to your system</Typography>
                        <br />
                        <Typography variant="body1" className={classes.body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ullamcorper velit. Ut dictum justo ipsum, non tristique quam cursus vitae. Maecenas ut cursus risus. Nullam finibus egestas mi, a hendrerit mauris facilisis in. Aenean gravida dictum metus vitae venenatis. Cras et molestie massa. Donec consectetur, velit sit amet ultrices lobortis, tellus erat aliquam purus, in porta enim orci eu felis. Curabitur egestas pretium est. Cras in congue tellus, a convallis nunc. Cras blandit enim ultricies libero lobortis consectetur. Cras non ullamcorper lacus.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography className={classes.title} variant="h3" >
                            Easy access.
                            Whenever, wherever
                            you want
                        </Typography>
                        <br />
                        <Typography variant="body1" className={classes.body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ullamcorper velit. Ut dictum justo ipsum, non tristique quam cursus vitae. Maecenas ut cursus risus. Nullam finibus egestas mi, a hendrerit mauris facilisis in. Aenean gravida dictum metus vitae venenatis. Cras et molestie massa. Donec consectetur, velit sit amet ultrices lobortis, tellus erat aliquam purus, in porta enim orci eu felis. Curabitur egestas pretium est. Cras in congue tellus, a convallis nunc. Cras blandit enim ultricies libero lobortis consectetur. Cras non ullamcorper lacus.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Image src={signIn} />
                    </Grid>

                    <Grid item xs={12}>
                        <Partners />
                    </Grid>

                    <Grid item xs={12}>
                        <PeopleList setOpenEdit={setOpenEditPeople} setOpenAdd={setOpenAddPeople} />
                    </Grid>

                    <Grid item xs={12}>
                        <Customers />
                    </Grid>

                    <Grid item xs={12}>
                        <ContactUs />
                    </Grid>
                </Grid>
            </Page>
            <EditPeople open={openEditPeople} setOpen={setOpenEditPeople} />
            <AddPeople open={openAddPeople} setOpen={setOpenAddPeople} />
        </Fragment>
    )
}


export default Home