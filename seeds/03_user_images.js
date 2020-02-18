exports.seed = function(knex) {
  return knex('user-images').del()
};
