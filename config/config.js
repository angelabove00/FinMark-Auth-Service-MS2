const path = require('path');
const dotenv = require('dotenv');

// Get the absolute path to the .env file
const envPath = path.resolve(__dirname, '../.env');

// Load .env file from project root
const result = dotenv.config({ path: envPath });

if (result.error) {
  console.error('Error loading .env file:', result.error.message);
  console.error('Looking for .env file at:', envPath);
  process.exit(1);
}

// Log loaded environment variables (without sensitive data)
console.log('Environment variables loaded from:', envPath);

const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/finmark-auth',
  jwtSecret: process.env.JWT_SECRET,
  env: process.env.NODE_ENV || 'development'
};

// Validate required environment variables
const requiredEnvVars = ['MONGO_URI', 'JWT_SECRET'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('\nMissing required environment variables:');
  missingEnvVars.forEach(envVar => {
    console.error(`- ${envVar}: not set`);
  });
  console.error('\nPlease check that:');
  console.error('1. Your .env file exists at:', envPath);
  console.error('2. The file contains all required variables');
  console.error('3. There are no spaces around the = signs');
  console.error('4. There are no quotes around the values');
  console.error('\nExample .env content:');
  console.error('PORT=5000');
  console.error('MONGO_URI=mongodb://localhost:27017/finmark-auth');
  console.error('JWT_SECRET=your_secret_here\n');
  throw new Error('Missing required environment variables');
}

module.exports = config; 