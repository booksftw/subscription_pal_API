
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('settings', function (table) {
            table.increments('id').primary();
            table.integer('userId').references('users.id')
            table.boolean('enable_sms');
            table.boolean('enableEmail');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTable('settings');
};
