const express = require(`express`)
const path = require(`path`)
const app = express()
app.use(express.json())

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.html`))
})


app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.css`))
})

app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/index.js`))
})
app.use(express.static(path.join(__dirname, `../public`)))


// app.use(rollbar.errorHandler())

const port = process.env.PORT || 5500

app.listen(port, () => console.log(`Take us to warp ${port}!`))