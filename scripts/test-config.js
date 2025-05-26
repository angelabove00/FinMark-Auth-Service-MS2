const config = require('../config/config');

console.log('\nEnvironment Configuration:');
console.log('------------------------');
console.log('Environment:', config.env);
console.log('Port:', config.port);
console.log('MongoDB URI:', config.mongoUri);
console.log('JWT Secret:', config.jwtSecret ? '✓ Set' : '✗ Missing');
console.log('------------------------\n'); 