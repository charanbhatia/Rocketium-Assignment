const express = require('express');
const dataRoutes = require('./src/routes/dataRoutes');
const { initializeData } = require('./src/utils/dataFetcher');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/api', dataRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

async function startServer() {
  try {
    await initializeData();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();