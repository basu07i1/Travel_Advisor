import axios from 'axios';

const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export  const getPlacesData = async (sw , ne) => {
   try {
    const {data: {data}} = await axios.get( URL , {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,   
  },
  headers: {
    'x-rapidapi-key': '5db50b3216msh7f24623680f1fddp15190djsna7e20e0775e7',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'Content-Type': 'application/json'
  }});
	return data;
}
catch (error) {
	console.error(error);
}

}
