const mongoose = require('mongoose')

const catalogSchema = new mongoose.Schema({
    ISBN: {
        type: Number,
        required: true,
        unique: true,
        validate(val) {
            if (val < 0 || val.toString().length !== 10) {
                throw new Error("Please! \"ISBN\" must be of length 10 and a positive number")
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
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
        required: true,
        trim: true,
        lowercase: true
    }

})

const Catalog = mongoose.model('Catalog', catalogSchema)

module.exports = Catalog