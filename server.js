const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const DIR_NAME = "./"
const MAIN_HTML = "main.html"

app.use(cors())

app.use(express.static('/public'))

app.listen(process.env.PORT || PORT, () => {
    console.log(`express server running on port: ${PORT}`)
})

