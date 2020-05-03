const express = require('express')

const port = 3000

const app = express()

app.use(express.static('public'))

app.listen(port, (req, res) => {
    console.log(`Listening in http://localhost:${port}`)
})