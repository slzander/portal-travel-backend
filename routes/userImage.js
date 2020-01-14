const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/user-images', (request, response) => {
    queries
        .userimages
        .getAll()
        .then(results => response.send(results))
        .then(response.status(201))
})

router.post('/user-images', (request, response) => {
    queries
        .userimages
        .create(request.body)
        .then(results => response.send(results))
        .then(response.status(201))
})

router.delete('/user-images/:id', (request, response) => {
    queries.delete(request.params.id)
        .then(response => response.send(204))
})

module.exports = router