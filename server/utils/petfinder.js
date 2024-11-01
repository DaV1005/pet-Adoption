// server/utils/petfinder.js
const axios = require('axios');
require('dotenv').config();

const PETFINDER_API_URL = 'https://api.petfinder.com/v2';

// Function to get an access token from Petfinder
async function getAccessToken() {
  try {
    const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: process.env.PETFINDER_CLIENT_ID,
      client_secret: process.env.PETFINDER_CLIENT_SECRET
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token from Petfinder:', error.response ? error.response.data : error.message);
    throw new Error('Failed to get access token');
  }
}

// Function to get a list of pets from Petfinder
async function getPets(location, type = 'dog', limit = 10) {
  try {
    const accessToken = await getAccessToken();
    const response = await axios.get(`${PETFINDER_API_URL}/animals`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        type: type,
        location: location,
        limit: limit,
      },
    });
    return response.data.animals;
  } catch (error) {
    console.error('Error getting pets from Petfinder:', error);
    throw new Error('Failed to fetch pets from Petfinder.');
  }
}

module.exports = {
  getPets,
};
