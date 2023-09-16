const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const api = require('./api');
const app = express();
const cors = require('cors');
app.use(cors());
// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use the API routes
app.use('/api', api);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
