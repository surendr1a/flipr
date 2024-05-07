const express = require('express');
const { createUser, getUsers, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createUser);
router.get('/', authMiddleware, getUsers);
router.delete('/:userId', authMiddleware, deleteUser);

module.exports = router;
