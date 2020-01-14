
exports.up = function(knex) {
    return knex.schema.createTable('user-images', userImage => {
        userImage.increments('id')
        userImage.integer('user_id')
        userImage.foreign('user_id').references('id').inTable('users')
        userImage.integer('image_id')
        userImage.foreign('image_id').references('id').inTable('images')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user-images')
};
