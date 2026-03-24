import React from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './Styles.js';

const libraries = ['places'];

const Header = () => {
    const classes = useStyles();
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey,
        libraries,
    });

    const searchInput = (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
        </div>
    );

    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore New Places
                    </Typography>
                    {googleMapsApiKey && isLoaded ? (
                        <Autocomplete>
                            {searchInput}
                        </Autocomplete>
                    ) : (
                        searchInput
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    )};

export default Header;