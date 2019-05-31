const mongoose = require('mongoose');
// const Item = require('./Item');

const PlayerCharacterSchema = new mongoose.Schema({
    name: String,
    type: String,
    AP: Number,
    HP: Number,
    XP: Number,
    level: Number,
    // Items: [Item],
    Money: Number
});

module.exports = mongoose.model('PlayerCharacter', PlayerCharacterSchema);