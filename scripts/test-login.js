const axios = require('axios');

async function verifyLogin() {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email: 'tryonly002@example.com',
      password: 'conanlily'
    });

    console.log('\nLogin successful');
    console.log('Status:', response.status);
    console.log('Token:', response.data.token);
  } catch (error) {
    console.error('\nLogin failed:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Error:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

verifyLogin(); 