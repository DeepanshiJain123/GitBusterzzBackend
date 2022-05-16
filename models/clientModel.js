const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: {
        type: String
    },
    logo: {
        type: String
    },
    policies: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Policy'
        }
    ]

})

const Client = mongoose.model('Client', clientSchema)

module.exports = { Client }