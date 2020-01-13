exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { first_name: 'stacey',
          username: 'saltystacey',
          password_digest: '123'
        },
      ]);
    });
};