// server/routes/petRoutes.js
const express = require('express');
const router = express.Router();
const { getPets } = require('../utils/petfinder');

// Route to get pets based on location and type
router.get('/pets', async (req, res) => {
  const { location = 'New York, NY', type = 'dog', limit = 20 } = req.query;

  try {
    const pets = await getPets(location, type, limit);
    // Filter pets to only include those with images
    const petsWithImages = pets.filter(pet => pet.photos && pet.photos.length > 0);
    res.json(petsWithImages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pets from Petfinder API', error: error.message });
  }
});

module.exports = router;
