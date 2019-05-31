const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Whatcha doin?']
    },
    action: {
        type: String,
        actor1: playerCharacter._id,
        actor2: nonplayercharacter._id,
    },
    result: {
        
    }
    

});

module.exports = mongoose.model('Action', ActionSchema);