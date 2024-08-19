const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Import the combined router
const authMiddleware = require('./middleware/authMiddleware');

const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the combined router
app.use('/', routes);

// Example of a protected route
app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Handle other errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
