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

router.get('/books/info/:ISBN', async (req, res) => {
    try {
        const books = await Catalog.find({ ISBN: req.params.ISBN })
        if (!books.length) {
            return res.status(404).send()
        }
        res.status(200).send(books)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/books/:ISBN', async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['ISBN', 'count', 'price']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(500).send({ msg: "invalid update operation" })
    }
    try {
        const book = await Catalog.findOne({ ISBN: req.params.ISBN })
        if (!book) {
            return res.status(404).send()
        }

        updates.forEach((update) => { book[update] = req.body[update] })

        await book.save()
        res.status(200).send()
    } catch (e) {
        res.status(500).send()
    }

})
module.exports = router