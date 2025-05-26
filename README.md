# FinMark Auth Service – Milestone 2

This project is the login feature for the FinMark platform. It is part of the software development team's output for Milestone 2. This system follows the design and security plans proposed in Milestone 1.

---

## Feature Built

- Accepts user login using email and password
- Uses bcrypt to hash passwords before saving
- Returns a secure JWT token after login
- Connects to MongoDB to store user records
- Follows a clean folder structure for maintainability

---

## From Milestone 1

- We proposed a modular architecture. This login module is one of those modules.
- We planned for secure user authentication. This service uses bcrypt and JWT.
- We described role-based access. The token includes the user’s role.
- We used Express, MongoDB, and Node.js, as stated in the milestone.

---

## Stack Used

- Node.js  
- Express  
- MongoDB (via Mongoose)  
- bcryptjs  
- jsonwebtoken  
- dotenv

---

## How to Run

1. Clone this repository to your local machine.
2. Open the project folder and run npm install to install all required packages.
3. In the root of the project, create a file named .env. Inside this file, add the following lines exactly:
PORT=5000
MONGO_URI=mongodb://localhost:27017/finmark-auth
JWT_SECRET=secretonly123
4. Start the server by typing npm start in the terminal.
5. To create the test user, run the script named createUser.js found in the scripts folder.
6. To test the login function, run the test-login.js script. This will return a token if the login is successful. You can then use that token for authenticated requests.





