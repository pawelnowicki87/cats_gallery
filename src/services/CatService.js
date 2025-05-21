import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=6'

export const fetchCats = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching cats', error);
        throw error;
    }
}