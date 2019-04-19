"use strict";

exports.getSubscriptions = (req, res, next) => {
  const allSubscriptions = Subscription.fetchAll();

  allSubscriptions.then(subs => {
    const subscriptions = subs.serialize();
    res.status(200).json({ subscriptions });
  });

  res.status(500);
};

exports.addSubscription = (req, res, next) => {
  res.send("early blockage add subscription");
};
