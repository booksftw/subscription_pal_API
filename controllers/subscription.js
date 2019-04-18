"use strict";

const { Subscription, Invoice } = require("../models/models");

exports.getSubscriptions = (req, res, next) => {
  const allSubscriptions = Subscription.fetchAll();

  allSubscriptions.then(subs => {
    const subscriptions = subs.serialize();
    res.status(200).json({ subscriptions });
  });

  res.status(500);
};

exports.addSubscription = (req, res, next) => {
  console.log(req, "hi");
  // console.log(res, "req");
  console.log("yo");
  res.send("early blockage add subscription");
  // new Subscription({
  //   name: "secondTestName",
  //   amount: 34056
  // })
  //   .save()
  //   .then(e => {
  //     console.log("SUCCESS SAVING SUBSCRIPTION", e);
  //     res.status(400).send("Added subscription - good job.");
  //   })
  //   .catch(err => {
  //     console.log("FAILED INSERTION", err);
  //     res.status(500).send("failed subscription.");
  //   });
};
