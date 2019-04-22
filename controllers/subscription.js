"use strict";
const { Subscription } = require("../models/Subscription");

exports.getSubscriptions = async (req, res, next) => {
  const subscription = await Subscription.query();
  res.status(200).json(subscription);
};

exports.addSubscription = async (req, res, next) => {
  const { name, amount, linkToPage, image, status } = req.body;
  const newSubscription = await Subscription.query().insert({
    name: name,
    amount: amount,
    status: status
  });
  console.log(newSubscription);
  res.send("early blockage add subscription");
};

exports.deleteSubscription = async (req, res, next) => {
  const id = req.params.id;
  console.log("Delete sub from server " + id);

  const deleteSubscription = await Subscription.query()
    .deleteById(id)
    .then(e => {
      console.log(e);
      e === 1
        ? res.status(200).send("Record successfully deleted")
        : res.status(404).send("Item does not exist");
    })
    .catch(err => {
      console.log(err);
      res.status(404).send("Error in attempt to delete");
    });
};
