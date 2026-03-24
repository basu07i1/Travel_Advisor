import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper , Typography , useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './Styles';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    // eslint-disable-next-line no-unused-vars
    const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
            
            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}} 
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50 , 50 , 50 , 50]}
            options={' '}
            onChange={''}
            onChildClick={''}
        
            >

            </GoogleMapReact>

        </div>
        
    );

}

export default Map;