const mongoose = require('mongoose');

const PassageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Passage must contain words']
    },
    next: []

});

module.exports = mongoose.model('Passage', PassageSchema)