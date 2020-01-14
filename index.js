const express = require('express')
const app = express()
const users = require('./routes/user')
const images = require('./routes/images')
const userImages = require('./routes/user-images')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 9000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(users)
app.use(images)
app.use(userImages)

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})