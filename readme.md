# Authentication Service

This project provides a simple authentication service using JSON Web Tokens (JWT) for user registration, login, and protected routes.

## Features

- **User Registration:** Allows users to create new accounts with usernames and passwords.
- **User Login:** Authenticates users based on their credentials and issues JWT tokens.
- **Protected Routes:** Enforces authentication for specific routes, requiring a valid JWT token for access.
- **Token Expiration:** JWT tokens have a configurable expiration time, preventing unauthorized access after a set period.

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash 
   git clone https://github.com/your-username/auth-service.git
2. Navigate to the project directory:
   ```bash
   cd auth-service
3. Install dependencies:
   ```bash
   npm install
4. Configuration
Add the following environment variables:
   ```bash
   JWT_SECRET=your_secret_key
   TOKEN_EXPIRY_MINUTES=5
***JWT_SECRET***: A secret key used to sign and verify JWT tokens. Choose a strong and unique key.
***TOKEN_EXPIRY_MINUTES***: The duration (in minutes) for which JWT tokens are valid.

### Running the Server

Start the server:

``npm start``

## Usage
**API Documentation**
You can access the API documentation at http://localhost:3000/api-docs.

**Register a new user:**
Send a POST request to /auth/register with the following JSON payload:
``{
  "username": "your_username",
  "password": "your_password"
}``

**Login a user:**
Send a POST request to /auth/login with the following JSON payload:
``{
  "username": "your_username",
  "password": "your_password"
}``

**Access a protected route:**
- The response will include a JWT token in the token field.
- Include the JWT token in the Authorization header of your request, using the format Bearer your_token.


*For example:*

- **register:** ``curl -X POST -H 'Content-Type: application/json' -d '{"username":"your_username","password":"your_password"}' http://localhost:3000/auth/register``
- **login:** ``curl -X POST -H 'Content-Type: application/json' -d '{"username":"your_username","password":"your_password"}' http://localhost:3000/auth/login``
- **existing:** ``curl -X GET "http://localhost:3000/existing" -H "Authorization: Bearer your_token"``
- **users:** ``curl -X GET "http://localhost:3000/users" -H "Authorization: Bearer your_token"``
  

**Remember to:**

- Replace `your-username` with your actual GitHub username in the `git clone` command.
- Update the `JWT_SECRET` and `TOKEN_EXPIRY_MINUTES` values in the `.env` file with your own configuration.
- Add any additional information or sections relevant to your project.


**Contributing**
Contributions are welcome! Please open an issue or submit a pull request.

**License**
This project is licensed under the MIT License.

**Acknowledgements**
express
dotenv
swagger-ui-express

This detailed README.md file provides a comprehensive guide for users to understand, set up, and use your authentication service.