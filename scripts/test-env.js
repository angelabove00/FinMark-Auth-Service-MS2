require('dotenv').config();

console.log('Testing .env file loading:');
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);
console.log('JWT_SECRET:', process.env.JWT_SECRET); 