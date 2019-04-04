const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : '1',
    database : 'subscription_fire',
    charset  : 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex)

module.exports = bookshelf;