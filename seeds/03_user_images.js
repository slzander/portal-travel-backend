exports.seed = function(knex) {
  return knex('user-images').del()
    // .then(function () {
    //   return knex('user-images').insert([
    //     // { user_id: 7, image_id: 25},
    //     // { user_id: 7, image_id: 26},
    //     // { user_id: 7, image_id: 27}
    //   ]);
    // });
};
