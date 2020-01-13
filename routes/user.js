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

router.post('/user', (request, response) => {
    queries
        .users
        .create(request.body)
        .then(results => response.send(results))
        .then(response.status(201))
})

module.exports = router