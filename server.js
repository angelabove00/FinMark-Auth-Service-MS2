const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Server error'
  });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
}); 