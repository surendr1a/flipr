const express = require('express');
const { createDatabase, deleteDatabase, getDatabases } = require('../controllers/databaseController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createDatabase);
router.delete('/:databaseId', authMiddleware, deleteDatabase);
router.get('/', authMiddleware, getDatabases);

module.exports = router;
