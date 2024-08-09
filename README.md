About
task management API is using Express.js, MongoDB, and GraphQL. The API supports multi-tenancy, role-based access control (RBAC), and task management functionality.


Project Setup:

Initialize a Node.js project.
Install necessary packages: Express, Mongoose, GraphQL, express-graphql, bcrypt, jsonwebtoken, dotenv.


Database Models:

User Model: Includes fields username, password, role, organizationId.
Organization Model: Includes name.
Task Model: Includes title, description, status, dueDate, userId, organizationId.


GraphQL Schema:

Define types: Organization, User, Task.
Define queries: Retrieve organizations, users, tasks.
Define mutations: Create, update, delete organizations, users, tasks.



Testing:

Use Jest/Mocha for unit tests.
Provide a Postman collection for API testing.


Install Required Dependencies:

Install Express, Mongoose, GraphQL, and other necessary libraries:
npm install express mongoose graphql express-graphql bcrypt jsonwebtoken dotenv

Install testing dependencies:
npm install --save-dev jest supertest


Set Up Environment Variables:

Create a .env file in the root directory of your project:
PORT=5000
MONGO_URI=mongodb://localhost:27017/task_management
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development


Set Up MongoDB:

Ensure MongoDB is installed and running on your machine.
You can start MongoDB using the command:
mongod


Run the Application:

Start the Express server:
node src/index.js

