// src/services/dataService.js
const { getData } = require('../utils/dataFetcher');

function getFilteredAndSortedData(query) {
  try {
    let filteredData = getData();

    // Filtering
    if (query.name) {
      filteredData = filteredData.filter(item => item.name.toLowerCase().includes(query.name.toLowerCase()));
    }

    if (query.version) {
      filteredData = filteredData.filter(item => item.version === parseFloat(query.version));
    }

    if (query.language) {
      filteredData = filteredData.filter(item => item.language.toLowerCase() === query.language.toLowerCase());
    }

    // Sorting
    if (query.sort) {
      const [field, order] = query.sort.split(':');
      if (!['id', 'name', 'version'].includes(field)) {
        throw new Error('Invalid sort field');
      }
      filteredData.sort((a, b) => {
        if (order === 'asc') {
          return a[field] > b[field] ? 1 : -1;
        } else if (order === 'desc') {
          return a[field] < b[field] ? 1 : -1;
        } else {
          throw new Error('Invalid sort order');
        }
      });
    }

    return filteredData;
  } catch (error) {
    console.error('Error in getFilteredAndSortedData:', error.message);
    throw error;
  }
}

module.exports = { getFilteredAndSortedData };