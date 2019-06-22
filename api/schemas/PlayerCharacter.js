const mongoose = require('mongoose');
// const Item = require('./Item');

const PlayerCharacterSchema = new mongoose.Schema({
    name: String,
    type: String,
    AP: Number,
    HP: Number,
    XP: Number,
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        autopopulate: true
    }],
    gold: Number
});

module.exports = mongoose.model('PlayerCharacter', PlayerCharacterSchema);