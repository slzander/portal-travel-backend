exports.up = function(knex) {
    return knex.schema.createTable('images', image => {
        image.increments('id')
        image.string('title')
        image.text('url')
        image.text('low_resolution_url')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('images')
};
