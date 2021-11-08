const express = require('express')
require('./db/mongoose')
const catalogRouter = require('./routers/catalog')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(catalogRouter)

app.listen(PORT, () => {
    console.log("Running Catalog Server on Port " + PORT)
})