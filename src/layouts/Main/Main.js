import React, { Fragment, Suspense } from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import { Topbar, Footer, Hero } from './components';
import { Container, LinearProgress } from '@material-ui/core';
import { renderRoutes } from 'react-router-config'
import { makeStyles } from '@material-ui/styles';
import bannerShape from '../../assets/images/bannerShape.svg'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        backgroundColor: theme.palette.topBar.main,
        // borderBottom: '2px solid blue',
        // '&::after': {
        //     marginTop: theme.spacing(22),
        //     position: 'absolute',
        //     display: 'block',
        //     content: `url(${bannerShape})`,
        //     zIndex: -1,
        //     width: '100%',
        //     height: '100%',
        //     opacity: '0.6',
        //     left: theme.spacing(-2),
        // }
    },
}))

const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

HideOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
};

const Main = ({ route }) => {
    const classes = useStyles();

    return (
        <Fragment>
            <HideOnScroll>
                <AppBar
                    position={'fixed'}
                    elevation={6}
                    className={classes.root}
                >
                    <Container maxWidth="lg">
                        <Topbar />
                    </Container>
                </AppBar>
            </HideOnScroll>
            <main>
                <Suspense fallback={<LinearProgress />}>
                    <Box height={{ xs: 56, sm: 64 }} />
                    {renderRoutes(route.routes)}
                </Suspense>
                <Divider />
            </main>
            <Container maxWidth="lg">
                <Footer />
            </Container>
        </Fragment>
    );
};

Main.propTypes = {
    children: PropTypes.node,
};

export default Main;
