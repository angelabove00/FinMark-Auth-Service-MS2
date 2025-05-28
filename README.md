FinMark Auth Service – Milestone 2

This project implements the login and registration feature for the FinMark platform. It serves as the software development team's functional output for Milestone 2 and follows the modular design and security practices outlined in Milestone 1.

** Feature Overview
Registers users using name, email, and password

1. Accepts login via email and password
2. Uses bcrypt for password hashing
3. Returns a signed JWT token on successful login
4. Stores user data in MongoDB using Mongoose
5. Follows a modular folder structure for scalability

** Based on Milestone 1 Architecture

1. Implements a modular microservices design as proposed
2. Applies secure authentication using bcrypt and JWT
3. Includes role-based token support for future access control
4. Uses Node.js, Express, MongoDB, and other stack components as planned

** Tech Stack

Node.js
Express.js
MongoDB (via Mongoose)
bcryptjs
jsonwebtoken
dotenv

**How to Run the App

1. Clone the repository to your local machine.
2. Open the project folder and run npm install to install all required packages.
3. In the root of the project, create a file named .env with the following content:
   
PORT=5000  
MONGO_URI=mongodb://localhost:27017/finmark-auth  
JWT_SECRET=secretonly123
5. Start the server by running npm start in the terminal.

**Milestone 2 Notes
1. What Was Set Up and Why
The authentication service was built as the first microservice in the FinMark system. It handles user registration and login using Node.js, Express, MongoDB, and JWT. These are essential components for secure user identity management in a microservices-based architecture.

2. Challenges Encountered
Some early issues included handling asynchronous database operations and configuring the JWT token logic. We also spent time improving input validation and resolving token expiration behavior.

3. What Worked Well
The route setup, password hashing using bcrypt, and JWT token handling worked reliably. MongoDB integration using Mongoose was successful, and the use of middleware helped maintain clean code structure.

4. What Needs Refinement
While functional for Milestone 2, the system can be improved with additional features like rate limiting, refresh token handling, and stricter input validation. These will be considered in later milestones.
