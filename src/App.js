import React , { useState , useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core'; 

// import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
import {getPlacesData} from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

// import PlaceDetails from './components/PlaceDeatils/PlaceDetails';

const  App = () => {
  const [places , setPlaces ] = useState([]);
  const [childClicked , setChildClicked] = useState(null); 

  const [coordinates , setCoordinates] = useState({ });
  const [bounds , setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates({ lat: latitude , lng: longitude});
    })

  }, []);

  useEffect(() => {
    if (!bounds) return;

    let isMounted = true;
    
    getPlacesData( bounds.sw , bounds.ne )
    .then((data ) => {
      if (isMounted) {
        console.log(data);
        setPlaces(data);
      }
    })
    .catch((error) => {
      console.error('Error fetching places:', error);
    });

    return () => {
      isMounted = false;
    };
    
  } , [bounds]);
  return (
    <>
      <CssBaseline />
      <Header /> 
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
            <List places={places}  />

        </Grid> 
        <Grid item xs={12} md={8}>
            <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked ={setChildClicked}
            
            />
        </Grid>

        

      </Grid>
      
    </>
  )
}

export default App;
