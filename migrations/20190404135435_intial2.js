
exports.up = function(knex, Promise) {
    return knex.schema.createTable('contact_infos', function(table) {
        table.increments('id').primary();
        table.integer('userid').references('users');
        table.integer('phone_number');
        table.string('email');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('contact_infos');
};
