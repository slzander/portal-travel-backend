exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { first_name: 'Stacey',
          username: 'stacey@mail.com',
          password_digest: 'aaaaaa'
        },
      ]);
    });
};