const express = require('express')
const Catalog = require('../models/catalog')

const router = express.Router()

router.get('/books/search/:topic', async (req, res) => {

    try {
        const books = await Catalog.find({ topic: req.params.topic })
        if (!books.length) {
            
            return res.status(404).send()
        }
        res.status(200).send(books)
    } catch (e) {
        res.status(500).send()
    }

})

router.get('/books/info/:name', async (req, res) => {
    try {
        const books = await Catalog.find({ name: req.params.name })
        if (!books.length) {
            return res.status(404).send()
        }
        res.status(200).send(books)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router