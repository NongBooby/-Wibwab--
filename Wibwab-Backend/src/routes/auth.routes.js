// routes/auth.routes.js — POST /api/auth/register, /login, GET /api/auth/me
const router = require('express').Router();
const { verifyToken } = require('../middleware/auth');
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', verifyToken, authController.me);

module.exports = router;
