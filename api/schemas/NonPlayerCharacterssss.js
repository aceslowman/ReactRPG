const mongoose = require('mongoose');

const NonPlayerCharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'What is this fine characters name?']
    },
    AP: Number,
    HP: Number,
    friendly: Boolean
});

module.exports = mongoose.model('NonPlayerCharacter', NonPlayerCharacterSchema);