const database = require('./database')
const bcrypt = require('bcrypt')

module.exports = {
    users: {
        getAll: () => {
            return database('users')
            .then(users => {
                const promises = users.map(user => {
                    return database('user-images')
                        .join('images', 'images.id', 'user-images.image_id')
                        .where('user_id', user.id)
                        .then(images => {
                            user.images = images
                            return user
                        })
                })
                return Promise.all(promises)
            })
        },
        create: (user) => {
            return bcrypt.hash(user.password, 12)
                .then(hash => {
                    return database('users')
                        .insert({
                            first_name: user.first_name,
                            username: user.username,
                            password_digest: hash
                        })
                        .returning([
                            'id',
                            'first_name',
                            'username'
                        ])
                        .then(users => users[0])
                })
        },
        delete(id){
            return database('users')
                .where('id', id)
                .delete()
        },
    },
    login: {
        authorizeUser: (user) => {
            return database('users')
                .where({ username: user.username })
                .first()
        }
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
    },
    userImages: {
        getAll: () => {
            return database('user-images')
        },
        create: (userImage) => {
            return database('user-images')
                .insert({
                    user_id: userImage.title,
                    image_id: userImage.url
                })
                .returning([
                    'id',
                    'title',
                    'url'
                ])
                .then(userImages => userImages[0])
        },
        delete(id){
            return database('user-images')
                .where('id', id)
                .delete()
        }
    }
}