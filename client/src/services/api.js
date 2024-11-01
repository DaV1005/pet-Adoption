// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pets'; // Replace with your backend URL if needed

// Function to get pets from the backend
export const getPets = async (location = 'Los Angeles, CA', type = 'dog', limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/pets`, {
      params: { location, type, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};
 