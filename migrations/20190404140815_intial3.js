exports.up = function(knex, Promise) {
  return knex.schema.createTable("settings", function(table) {
    table.increments("id").primary();
    table.integer("user_id").references("users.id");
    table.boolean("enable_sms");
    table.boolean("enableEmail");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("settings");
};
