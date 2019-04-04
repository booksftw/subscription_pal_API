'use strict';

const Subscription = require('../models/models');

exports.getSubscriptions = (req, res, next) => {
    console.log('getting all subscriptions');
    res.send('JSON FOR ALL SUBSCRIPTIONS');
}

exports.addSubscription = (req, res, next) => {

    new Subscription({
            name: 'secondTestName',
            amount: 34056
        })
        .save()
        .then(e => {
            console.log('SUCCESS SAVING SUBSCRIPTION', e);
            res.status(400).send('Added subscription - good job.');
        })
        .catch(err => {
            console.log('FAILED INSERTION', err);
            res.status(500).send('failed subscription.');
        });

}