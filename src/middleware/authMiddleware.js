const { verifyToken } = require('../utils');
const { UnauthorizedError, TokenExpiredError } = require('../utils/errors');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            return res.status(401).json({ message: 'Token has expired' });
        }
        if (err instanceof UnauthorizedError) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        console.error('Token verification error:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = authMiddleware;
