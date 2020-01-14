exports.seed = function(knex) {
  return knex('user-images').del()
    .then(function () {
      return knex('user-images').insert([
        { user_id: 1, image_id: 28},
        { user_id: 1, image_id: 29},
        { user_id: 1, image_id: 30}
      ]);
    });
};
