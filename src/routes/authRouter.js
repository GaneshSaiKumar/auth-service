const express = require('express');
const { hashPassword, verifyPassword } = require('../utils/hashUtils');
const { generateToken } = require('../utils');
const { addUser, findUserByUsername } = require('../utils/userStorage');

const authRouter = express.Router();

authRouter.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (findUserByUsername(username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = hashPassword(password);
  addUser({ username, password: hashedPassword });
  res.status(201).json({ message: 'User registered' });
});

authRouter.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = findUserByUsername(username);

  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  if (!verifyPassword(password, user.password)) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken({ username });
  res.json({ token });
});

module.exports = authRouter;
