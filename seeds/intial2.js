const {invoiceMockData} = require("../data/mockData");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('invoice').del()
    .then(function () {
      // Inserts seed entries
      return knex('invoice').insert(invoiceMockData);
    });
};
