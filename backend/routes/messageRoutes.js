const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messageController');
const { authenticate } = require('../middleware/auth'); // Middleware for authentication
const router = express.Router();

router.post('/', authenticate, sendMessage);
router.get('/', authenticate, getMessages);

module.exports = router;
