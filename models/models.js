const db = require('../util/database');

exports.Subscription = db.Model.extend({
	tableName: 'subscriptions',
	users: function () {
		return this.hasMany(users);
	},
	invoice: function() {
		this.hasMany(invoice);
	}
});

exports.Users = db.Model.extend({
	tableName: 'users',
	subscriptions: function () {
		return this.belongsToMany(Subscription);
	},
	userContactInfo: function () {
		return this.hasMany(UserContactInfo);
	},
	settings: function () {
		return this.belongsToMany(settings)
	}
})

exports.UserContactInfo = db.Model.extend({
	tableName: 'UserContactInfo',
	users: function () {
		return this.belongsTo(users);
	}
})

exports.Settings = db.Model.extend({
	tableName: 'settings',
	users: function () {
		return this.belongsToMany(users);
	}
})

exports.Invoice = db.Model.extend({
	tableName: 'invoice',
	subscriptions: function () {
		this.belongsTo(Subscription);
	}
})

// module.exports = Subscription;