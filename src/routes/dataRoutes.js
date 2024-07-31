// src/routes/dataRoutes.js
const express = require('express');
const { getData } = require('../controllers/dataController');

const router = express.Router();

router.get('/data', (req, res) => {
  try {
    getData(req, res);
  } catch (error) {
    console.error('Error in data route:', error.message);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
});

module.exports = router;