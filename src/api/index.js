import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
    try {
        console.log("SW:", sw);
        console.log("NE:", ne);
        // Request
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,   // South-West Corner Latitude
                tr_latitude: ne.lat,   // North-East Corner Latitude
                bl_longitude: sw.lng,  // South-West Corner Longitude
                tr_longitude: ne.lng,  // North-East Corner Longitude
            },
            headers: {
                'x-rapidapi-key': '06880c831dmsh3b3eef9068a38bbp1718a5jsndfffd877042a',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        });

        console.log("Data received:", data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
