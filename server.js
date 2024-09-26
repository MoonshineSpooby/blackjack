const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')


app.use(cors())

app.use(express.static(__dirname + '/public/'))
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/main.html')
})
app.listen(process.env.PORT || PORT, () => {
    console.log(`express server running on port: ${PORT}`)
})

