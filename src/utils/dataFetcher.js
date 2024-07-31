const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

let dummyData = [];

async function fetchAndStoreData() {
  try {
    const response = await axios.get('https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json');
    dummyData = response.data;
    await fs.writeFile(path.join(__dirname, '../../data/data.json'), JSON.stringify(dummyData));
    console.log('Data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching or storing data:', error.message);
    throw error; 
  }
}

async function initializeData() {
  try {
    const data = await fs.readFile(path.join(__dirname, '../../data.json'), 'utf-8');
    dummyData = JSON.parse(data);
    console.log('Data loaded from file');
  } catch (error) {
    console.log('No existing data found or error reading file, fetching new data');
    await fetchAndStoreData();
  }
}

function getData() {
  if (dummyData.length === 0) {
    throw new Error('Data not initialized');
  }
  return dummyData;
}

module.exports = { initializeData, getData };