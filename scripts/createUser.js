const mongoose = require('mongoose');
const User = require('../models/User');
const config = require('../config/config');

const createUser = async () => {
  try {
    // Connect to MongoDB using config
    await mongoose.connect(config.mongoUri);
    console.log('Connected to MongoDB');

    // Create test user
    const user = {
      email: 'tryonly002@example.com',
      password: 'conanlily',
      role: 'user'
    };

    // Check if user already exists
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      console.log('User already exists');
      await mongoose.disconnect();
      return;
    }

    // Create new user
    const newUser = await User.create(user);
    console.log('User created successfully:', newUser.email);

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run the script
createUser(); 