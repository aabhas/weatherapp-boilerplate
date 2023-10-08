
import axios from 'axios';

export async function getWeatherData() {
    
    const api_url = 'https://cat-fact.herokuapp.com/facts/'

    try {
        const data = await axios.get(api_url);
        if (data.status === 200) {
            return data.data;
          } else {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }

  }
  