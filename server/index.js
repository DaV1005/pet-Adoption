// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const petRoutes = require('./routes/pets'); // Import the pet routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Register Pet Routes
app.use('/api/pets', petRoutes);



// MongoDB connection (if using MongoDB, adjust as needed)
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(err));

app.get('/', (req, res) => res.send('API is running...'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
