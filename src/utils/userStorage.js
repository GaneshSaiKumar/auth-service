const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

// Ensure the data directory exists
if (!fs.existsSync(path.dirname(usersFilePath))) {
  fs.mkdirSync(path.dirname(usersFilePath));
}

// Read users from file
const readUsers = () => {
  if (!fs.existsSync(usersFilePath)) {
    return [];
  }

  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

// Write users to file
const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Add a new user
const addUser = (user) => {
  const users = readUsers();
  users.push(user);
  writeUsers(users);
};

// Find a user by username
const findUserByUsername = (username) => {
  const users = readUsers();
  return users.find(user => user.username === username);
};

module.exports = { addUser, findUserByUsername };
