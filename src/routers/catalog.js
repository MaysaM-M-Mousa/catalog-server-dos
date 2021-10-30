const express = require('express')
const Catalog = require('../models/catalog')

const router = express.Router()

router.get('/', (req,res)=>{
    res.send("asd")
})

router.get('/books/search/:topic', async (req, res) => {
 
})

router.get('/books/info/:id', (req, res) => {

})

module.exports = router