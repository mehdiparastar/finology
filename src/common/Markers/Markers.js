import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {},
}));

const GMarkers = (props) => {
    const { lat, lng } = props
    // eslint-disable-next-line
    const classes = useStyles();
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCVBthtEmWi0Ul8mejDQrBlOULXB1kTB3I'
        // googleMapsApiKey: 'AIzaSyBqWXNxyLQ2sjCs-Qg1RpMxt4F8HCZVm4Y'
    })

    const renderMap = useMemo(() => {
        let position
        position = {
            lat: 38.026939,
            lng: 46.369497,
        }

        if (RegExp(/\d{2}.\d{4}$/).test(lat) && RegExp(/\d{2}.\d{4}$/).test(lng)) {
            position = { lat: Number(lat), lng: Number(lng) }
        }
        return (
            <GoogleMap
                id='example-map'
                mapContainerStyle={{ width: '100%', height: '100%' }}
                zoom={10}
                center={position}
            >
                <Marker position={position} />
            </GoogleMap >
        );
    }, [lat, lng])

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? renderMap : <LinearProgress />
}

export default GMarkers;

