const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/images', (request, response) => {
    queries
        .images
        .getAll()
        .then(results => response.send(results))
        .then(response.status(201))
})

router.post('/images', (request, response) => {
    queries
        .images
        .create(request.body)
        .then(results => response.send(results))
        .then(response.status(201))
})

router.delete('/images/:id', (request, response) => {
    queries.delete(request.params.id)
        .then(result => response.send(204))
})

module.exports = router