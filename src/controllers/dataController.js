// src/controllers/dataController.js
const { getFilteredAndSortedData } = require('../services/dataService');

function getData(req, res) {
  try {
    const filteredData = getFilteredAndSortedData(req.query);
    res.json(filteredData);
  } catch (error) {
    console.error('Error in getData controller:', error.message);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
}

module.exports = { getData };