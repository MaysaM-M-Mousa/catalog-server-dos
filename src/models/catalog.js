const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema({
    count: {
        type: Number,
        required: true,
        trim: true,
        validate(val) {
            if (val < 0) {
                throw new Error("Please! \"count\" must be a positive number")
            }
        }
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        validate(val) {
            if (val < 0) {
                throw new Error("Please! \"price\" must be a positive number")
            }
        }
    },
    topic: {
        type: String,
        required:true,
        trim: true,
        lowercase: true
    }

})

const Catalog = mongoose.model('Catalog', catalogSchema)

module.exports = Catalog