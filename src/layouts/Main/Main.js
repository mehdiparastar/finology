import React, { Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import { Topbar, Footer, Sidebar } from './components';
import { Container, LinearProgress } from '@material-ui/core';
import { renderRoutes } from 'react-router-config'
import { makeStyles } from '@material-ui/styles';
// import PerfectScrollbar from 'react-perfect-scrollbar'

const useStyles = makeStyles(theme => ({
    wholePage: {
        overflow: 'hidden',
    },
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
    footer: {
        background: theme.palette.topBar.main,
        padding: theme.spacing(4),
    }
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
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleSidebarOpen = () => {
        setOpenSidebar(true);
    };

    const handleSidebarClose = () => {
        setOpenSidebar(false);
    };
    return (
        // <PerfectScrollbar options={{ suppressScrollX: true }}>
        <div className={classes.wholePage}>
            <HideOnScroll>
                <AppBar
                    position={'fixed'}
                    elevation={6}
                    className={classes.root}
                >
                    <Container maxWidth="lg">
                        <Topbar onSidebarOpen={handleSidebarOpen} />
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Sidebar
                onClose={handleSidebarClose}
                open={openSidebar}
                variant="temporary"
            // pages={pages}
            />
            <main>
                <Suspense fallback={<LinearProgress />}>
                    <Box height={{ xs: 96, sm: 104 }} />
                    {renderRoutes(route.routes)}
                </Suspense>
                <br /><br /><br /><br /><br /><br />
                <Divider />
            </main>
            <footer className={classes.footer}>
                <Container maxWidth="lg" >
                    <Footer />
                </Container>
            </footer>
        </div>
        //</PerfectScrollbar> 
    );
};

Main.propTypes = {
    children: PropTypes.node,
};

export default Main;
