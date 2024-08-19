# Auth Service

This project implements a user authentication service using custom JWT and password hashing implementations. It includes middleware for verifying JWT tokens and handling authentication for protected routes.

## Features

- User registration and login
- JWT-based authentication
- Custom JWT and password hashing implementations
- Sophisticated JWT middleware with detailed error handling

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/GaneshSaiKumar/auth-service.git
   cd auth-service
Install Dependencies

Install the required Node.js dependencies:

bash
Copy code
npm install
Create Environment Variables

Create a .env file in the root directory based on the .env.example template. Replace your_jwt_secret_key with your own secret key:

plaintext
Copy code
JWT_SECRET=your_jwt_secret_key
Run the Application

Start the application using nodemon for automatic restarts on code changes:

bash
Copy code
npx nodemon src/app.js
The server will start on port 3000 by default. You can change the port by setting the PORT environment variable.

API Endpoints
1. Register a New User
URL: /auth/register

Method: POST

Request Body:

json
Copy code
{
  "username": "exampleUser",
  "password": "examplePassword"
}
Response:

json
Copy code
{
  "message": "User registered"
}
2. Login and Receive JWT Token
URL: /auth/login

Method: POST

Request Body:

json
Copy code
{
  "username": "exampleUser",
  "password": "examplePassword"
}
Response:

json
Copy code
{
  "token": "your_jwt_token_here"
}
3. Access a Protected Route
URL: /protected

Method: GET

Headers:

makefile
Copy code
Authorization: Bearer <your_jwt_token_here>
Response:

json
Copy code
{
  "message": "This is a protected route",
  "user": {
    "username": "exampleUser"
  }
}
Error Handling
The authentication middleware provides detailed error messages for various scenarios:

401 Unauthorized: If the authorization header is missing or malformed.
401 Unauthorized: If the JWT token is invalid or has expired.
500 Internal Server Error: For unexpected server errors during token verification.
Postman Collection
A Postman collection for testing the API endpoints is included in the repository under the Postman directory. Import the collection into Postman to test the endpoints with sample data.

Contributing
Feel free to open issues or submit pull requests if you have suggestions or improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.

For any additional questions or issues, please contact the repository maintainer.

markdown
Copy code

### Additional Notes:
- Make sure you create a `.env.example` file to guide users in setting up their environment variables.
- Update the `Postman` directory or section if you include a Postman collection in your repository. If not, you can remove that part or adjust it according to your setup.