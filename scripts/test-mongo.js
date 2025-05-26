const mongoose = require('mongoose');
const config = require('../config/config');

async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB...');
    console.log('MongoDB URI:', config.mongoUri);
    
    await mongoose.connect(config.mongoUri);
    console.log('Successfully connected to MongoDB!');
    
    // Test the connection by listing databases
    const admin = mongoose.connection.db.admin();
    const dbs = await admin.listDatabases();
    console.log('\nAvailable databases:');
    dbs.databases.forEach(db => console.log(`- ${db.name}`));
    
  } catch (error) {
    console.error('\nError connecting to MongoDB:');
    console.error(error.message);
    console.error('\nPlease check that:');
    console.error('1. MongoDB is installed');
    console.error('2. MongoDB service is running');
    console.error('3. You can connect to mongodb://localhost:27017');
  } finally {
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  }
}

testConnection(); 