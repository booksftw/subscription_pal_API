
exports.up = function (knex, Promise) {
    return knex.schema.createTable('invoice', function (table) {
        table.increments('id').primary();
        table.integer('subscriptionid').references('subscriptions.id');
        table.date('paydate');
        table.string('notes');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('invoice');
};
