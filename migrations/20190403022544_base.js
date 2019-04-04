exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('subscriptions', function (table) {
            table.increments('id').primary();
            table.string('name').notNullable();
            table.string('amount');
            table.string('image');
            table.string('linkToPage');
            table.boolean('status');
            table.date('createdAt');
        })
        .createTable('users', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('notes');
            table.date('createdAt');
        })
        .createTable('user_subscription', function (table) {
            table.integer('user_id').unsigned().references('users.id');
            table.integer('subscription_id').unsigned().references('subscriptions.id')
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTable('user_subscription')
        .dropTable('subscriptions')
        .dropTable('users');
};