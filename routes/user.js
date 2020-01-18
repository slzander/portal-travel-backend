const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/user', (request, response) => {
    queries
        .users
        .getAll()
        .then(results => response.send(results))
        .then(response.status(201))
})

router.get('/user/:id', (request, response) => {
    queries
        .users
        .show(request.params.id)
        .then(result => response.send(result))
        .then(response.status(201))
})

router.post('/user', (request, response) => {
    queries
        .users
        .create(request.body)
        .then(results => response.send(results))
        .then(response.status(201))
})

router.delete('/user/:id', (request, response) => {
    queries
        .users
        .delete(request.params.id)
        .then(result => response.send(204))
})

module.exports = router