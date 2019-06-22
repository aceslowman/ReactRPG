const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Where exactly? What is the name?']
    },
    environment: {
       type: String,
       required: [true, 'What sort of setting is this?']
    },
   backgroundImageUrl: String,
   nonPlayerCharacters: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'NonPlayerCharacter',
        autopopulate: true,
    }]
});

module.exports = mongoose.model('Location', LocationSchema);