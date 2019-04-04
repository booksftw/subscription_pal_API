const db = require('../util/database');

const Subscription = db.Model.extend({
    tableName: 'subscriptions',
    users: function() {
        return this.hasMany(User);
    }
});

const User = db.Model.extend({
    tableName: 'Users',
    subscriptions: function() {
        return this.belongsToMany(Subscription);
    }
})

module.exports = Subscription;