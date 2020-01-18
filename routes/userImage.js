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

router.put('/user-images/:id', (request, response) => {
    queries
        .userImages
        .update(request.params.id, request.body)
        .then(result => response.send(result))
        .then(response.status(201))
})

module.exports = router