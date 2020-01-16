const express = require('express')
const router = express.Router()
const queries = require('../db/queries')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = 'shhdonttell'

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
        .then(user => {
            if(!user){
                response.status(401).json({ error:'Wrong username/password' })
            } else {
                jwt.sign(user, secret, (error, token) => {
                    if(error) trhow new Error(error)
                    response.status(201).json({ token })
                })
            }
        })
        .catch(error => response.status(401).json({ error: error.message }))
})

router.post('/login', (request, response) => {
    queries
        .login
        .authorizeUser(request.body)
        .then(user => {
            if(!user){
                response.status(401).json({ error:'Wrong username/password' })
            } else {
                return bcrypt
                    .compare(request.body.password, user.password_digest)
                    .then(isAuthenticated => {
                        if(!isAuthenticated){
                            response.status(401).json({ error: 'Wrong username/password'})
                        } else {
                            return jwt.sign(user, secret, (error, token) => {
                                response.status(200).json({ token })
                            })
                        }
                    })
            }
        })
})

router.delete('/user/:id', (request, response) => {
    queries.delete(request.params.id)
        .then(response => response.send(204))
})

module.exports = router