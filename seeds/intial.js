const { subscriptionMockData } = require("../data/mockData");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("subscriptions")
    .del()
    .then(function() {
      // Inserts seed entries subscriptions
      return knex("subscriptions").insert(
        subscriptionMockData // : [id: int, name: string, image: ImageInterface, amount: int, linkToPage: string, status: boolean ]
      );
    });

};
