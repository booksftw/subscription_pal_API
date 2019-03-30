

exports.getSubscriptions = (req, res, next) => {
    console.log('getting all subscriptions');
    res.send('JSON FOR ALL SUBSCRIPTIONS');
}

exports.addSubscription = (req, res, next) => {
    res.send('added subscription')
}