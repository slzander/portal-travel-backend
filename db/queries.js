const database = require('./database')

module.exports = {
    users: {
        getAll: () => {
            return database('users')
        },
        create: (user) => {
            return database('users')
                .insert({
                    first_name: user.first_name,
                    username: user.username,
                    password_digest: user.password_digest
                })
                .returning([
                    'id',
                    'first_name',
                    'username',
                    'password_digest'
                ])
                .then(users => users[0])
        },
        delete(id){
            return database('users')
                .where('id', id)
                .delete()
        },
    },
    images: {
        getAll: () => {
            return database('images')
        },
        create: (image) => {
            return database('images')
                .insert({
                    title: image.title,
                    url: image.url
                })
                .returning([
                    'id',
                    'title',
                    'url'
                ])
                .then(images => images[0])
        },
        delete(id){
            return database('images')
                .where('id', id)
                .delete()
        }
    }
}