const express = require('express');
const { addInstance, getInstances } = require('../controllers/instanceController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addInstance);
router.get('/', authMiddleware, getInstances);

module.exports = router;
