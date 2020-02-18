const database = require('./database')

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
        show: (id) => {
            return database('users')
                .where('id', id)
                .returning([
                    'id',
                    'first_name',
                    'username'
                ])
                .then(users => users[0])
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
                    'username'
                ])
                .then(users => users[0])
        },
        delete: (id) => {
            return database('user-images')
                .where('user_id', id)
                .delete()
                .then(() => database('users')
                    .where('id', id)
                    .delete()
                )
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
        }
    },
    userImages: {
        getAll: () => {
            return database('user-images')
        },
        create: (user_id, images) => {
            return database('user-images')
                .insert([{
                    user_id,
                    image_id: images[0]
                },{
                    user_id,
                    image_id: images[1]
                },{
                    user_id,
                    image_id: images[2]
                }])
                .returning([
                    'id',
                    'user_id',
                    'image_id'
                ])
        },
        update: (id, userImage) => {
            return database('user-images')
                .where('id', id)
                .update(userImage)
                .returning([
                    'id',
                    'user_id',
                    'image_id'
                ])
                .then(userImages => userImages[0])
        },
        delete: (id) => {
            return database('user-images')
                .where('id', id)
                .delete()
        }
    }
}