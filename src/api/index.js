import axios from 'axios';

const URL =  'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {

  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
   
  },
  headers: {
    'x-rapidapi-key': '5db50b3216msh7f24623680f1fddp15190djsna7e20e0775e7',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

const getPlacesData = async () => {
   try {
    const {data: {data}} = await axios.get( URL , options);
	return data;

} 

catch (error) {
	console.error(error);
}

}
