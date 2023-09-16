const express = require('express');
const router = express.Router();
const DataModel = require('./DataModel');
``
// Load data into MongoDB
router.post('/loadData', async (req, res) => {
  try {
    const jsonData = require('./jsondata.json');
    await DataModel.insertMany(jsonData);
    res.status(200).json({ message: 'Data loaded successfully' });
  } catch (error) {
    console.error('Error loading data:', error);
    res.status(500).json({ message: 'Error loading data' });
  }
});

// Get all data from MongoDB
router.get('/getData', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting data:', error);
    res.status(500).json({ message: 'Error getting data' });
  }
});

// Implement additional filters (example: by country)
router.get('/getDataByCountry', async (req, res) => {
  const country = req.query.country;

  try {
    const data = await DataModel.find({ country });
    res.status(200).json(data);
  } catch (error) {
    console.error('Error getting data by country:', error);
    res.status(500).json({ message: 'Error getting data by country' });
  }
});

// Add similar endpoints for other filters
module.exports = router;
