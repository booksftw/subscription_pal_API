const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscription");

/* READ/GET susbscriptions. */
router.get("/", subscriptionController.getSubscriptions);

// POST subscription
router.post("/add", subscriptionController.addSubscription);

// DELETE subscription
router.delete("/delete/:id", subscriptionController.deleteSubscription);

module.exports = router;
