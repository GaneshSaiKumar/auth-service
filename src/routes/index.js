const express = require('express');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');

const router = express.Router();

// Use authentication routes
router.use('/auth', authRouter);

// Use user-related routes
router.use('/users', userRouter);

module.exports = router;
