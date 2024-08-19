const express = require('express');
const { readUsers } = require('../utils/userStorage');
const authMiddleware = require('../middleware/authMiddleware');

const userRouter = express.Router();

// List users
userRouter.get('/', authMiddleware, (req, res) => {
  const users = readUsers();
  res.json(users);
});

module.exports = userRouter;
