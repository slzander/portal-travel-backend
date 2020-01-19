const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/user-images', (request, response) => {
    queries
        .userImages
        .getAll()
        .then(results => response.send(results))
        .then(response.status(201))
})

router.post('/user-images', (request, response) => {
    queries
        .userImages
        .create(request.body)
        .then(results => response.send(results))
        .then(response.status(201))
})

router.patch('/user-images/:id', (request, response) => {
    queries
        .userImages
        .update(request.params.id, request.body)
        .then(result => response.send(result))
        .then(response.status(201))
})

router.delete('/user-images/:id', (request, response) => {
    queries
        .userImages
        .delete(request.params.id)
        .then(response.status(204))
})

module.exports = router