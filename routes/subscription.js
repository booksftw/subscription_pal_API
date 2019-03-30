const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscription');

/* GET susbscriptions. */
router.get('/', subscriptionController.getSubscriptions);

// POST subscription
router.post('/add', subscriptionController.addSubscription);

module.exports = router;
