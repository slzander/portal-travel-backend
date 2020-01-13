exports.up = function(knex) {
  return knex.schema.createTable('users', user => {
      user.increments('id')
      user.string('first_name')
      user.string('username')
      user.string('password_digest')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
