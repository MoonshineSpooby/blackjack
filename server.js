const express = require('express')
const app = express()
const PORT = 8000
const DIR_NAME = "./"
const MAIN_HTML = "main.html"
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html')
    res.sendFile(__dirname + '/assets/script.js')
    // response.sendFile(`${DIR_NAME}${MAIN_HTML}`)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`express server running on port: ${PORT}`)
})

